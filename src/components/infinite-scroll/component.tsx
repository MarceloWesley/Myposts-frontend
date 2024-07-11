"use client";
import {
  ComponentType,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { MetaData } from "../posts-list/types";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { produce } from "immer";

type DataProps = {
  meta: MetaData;
  data: any;
};

type InfiniteScrollProps = {
  onLoadMore: ({
    size,
    page,
  }: {
    size: number;
    page?: number;
  }) => Promise<DataProps>;
  pageSize: number;
  id?: number;
  Element: ComponentType<any>;
  initialData: DataProps;
};

const INITIAL_PAGE_VALUE = 1;

function InfiniteScroll({
  onLoadMore,
  pageSize,
  Element,
  id,
  initialData,
}: InfiniteScrollProps) {
  const [lists, setLists] = useState(initialData);
  const [page, setPage] = useState(INITIAL_PAGE_VALUE);
  const { ref, inView } = useInView();

  const loadMore = async () => {
    if (lists.meta.hasNext) {
      try {
        const newData: DataProps = await onLoadMore({
          size: pageSize,
          page: page + 1,
        });
        console.log("new data", newData);
        setLists(
          produce(lists, (draft) => {
            draft.data.push(...newData.data);
            draft.meta = newData.meta;
          })
        );
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const updateList = useCallback(() => {
    const existingIds = new Set(lists.data.map((item: any) => item._id));
    const newData = initialData.data.filter(
      (item: any) => !existingIds.has(item._id)
    );

    if (newData.length > 0) {
      setLists(
        produce(lists, (draft) => {
          if (!draft.meta.hasNext) {
            draft.data = [...newData, ...draft.data];
          } else {
            draft.data = [...newData, ...draft.data.slice(0, -1)];
          }
        })
      );
    }
  }, [initialData.data]);

  useEffect(() => {
    updateList();
  }, [updateList]);

  console.log("lists", lists);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  return (
    <>
      {lists.data.map((list: any) => (
        <Element key={list._id} data={list} />
      ))}
      {lists?.meta.hasNext && (
        <Box ref={ref} display="flex" justifyContent="center">
          <Typography>Loading..</Typography>
        </Box>
      )}
    </>
  );
}

export { InfiniteScroll };
