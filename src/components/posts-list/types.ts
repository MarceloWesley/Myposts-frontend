import { ResponseData } from "@/hooks/error-handling";

export type User = {
  createdAt: string | Date;
  updatedAt: string | Date;
  email: string;
  username: string;
  id: string;
} & ResponseData;

export type Post = {
  _id: string;
  content: string;
  createdAt: string | Date;
  title: string;
  updatedAt: string | Date;
  user: User;
} & ResponseData;

export type MetaData = {
  hasNext: boolean;
  hasPrevious: boolean;
  pageCount: number | null;
  total: number;
};

export type PostData = {
  data: Post[];
  meta: MetaData;
} & ResponseData;
