type User = {
  createdAt: string | Date;
  updatedAt: string | Date;
  email: string;
  username: string;
  id: string;
};

export type Post = {
  id: string;
  content: string;
  createdAt: string | Date;
  title: string;
  updatedAt: string | Date;
  user: User;
};

type MetaData = {
  hasNext: boolean;
  hasPrevious: boolean;
  pageCount: number | null;
  total: number;
};

export type PostData = {
  data: Post[];
  meta: MetaData;
};
