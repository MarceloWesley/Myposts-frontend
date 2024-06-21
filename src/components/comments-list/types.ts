export type CommentProps = {
  _id: string;
  content: string;
  createdAt: string | Date;
  post: string;
  updatedAt: string | Date;
  user: string;
};

type MetaData = {
  hasNext: boolean;
  hasPrevious: boolean;
  pageCount: number | null;
  total: number;
};

export type CommentData = {
  data: CommentProps[];
  meta: MetaData;
};
