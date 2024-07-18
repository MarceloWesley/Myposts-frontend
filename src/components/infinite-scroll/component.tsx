"use client";
import { ComponentType, useCallback, useEffect, useState } from "react";
import { MetaData } from "../posts-list/types";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { produce } from "immer";
import { useErrorHandling } from "@/hooks/error-handling";
import { GetProps } from "@/actions/types";

type DataProps = {
  meta: MetaData;
  data: unknown[];
};

type InfiniteScrollProps = {
  onLoadMore: ({ size, page, id }: GetProps) => Promise<DataProps>;
  pageSize: number;
  id?: number;
  Element: ComponentType<any>;
};

const INITIAL_PAGE_VALUE = 1;
const defaultInitialData: DataProps = {
  meta: { hasNext: false, hasPrevious: false, pageCount: 0, total: 0 },
  data: [],
};

function InfiniteScroll({
  onLoadMore,
  pageSize,
  Element,
  id,
}: InfiniteScrollProps) {
  const [list, setList] = useState<DataProps>(defaultInitialData);
  const [page, setPage] = useState(INITIAL_PAGE_VALUE);
  const { ref, inView } = useInView();
  const { errorValidation } = useErrorHandling();

  const loadMore = useCallback(async () => {
    try {
      const newData: DataProps = await onLoadMore({
        size: pageSize,
        page: page,
      });

      setList(
        produce(list, (draft) => {
          draft.data.push(...newData.data);
          draft.meta = newData.meta;
        })
      );
      setPage((prevPage) => prevPage + 1);
    } catch (error: any) {
      errorValidation(error);
    }
  }, [inView]);

  const loadInitialData = useCallback(async () => {
    try {
      const newData: DataProps = await onLoadMore({ size: pageSize, page: 1 });
      setList(
        produce(list, (draft) => {
          draft.data.push(...newData.data);
          draft.meta = newData.meta;
        })
      );
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [loadMore]);

  return (
    <>
      {list.data.map((value: any) => (
        <Element key={value._id} data={value} />
      ))}
      {list?.meta.hasNext && (
        <Box ref={ref} display="flex" justifyContent="center">
          <Typography>Loading..</Typography>
        </Box>
      )}
    </>
  );
}

export { InfiniteScroll };
