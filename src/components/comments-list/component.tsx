import { CommentData } from "./types";
import { Comment } from "../comments/component";

async function CommentsList({ comments }: { comments: CommentData }) {
  return (
    <>
      {comments?.data?.map((comment, index) => (
        <Comment key={comment._id} data={comment} />
      ))}
    </>
  );
}

export { CommentsList };
