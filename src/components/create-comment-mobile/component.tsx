import {
  Box,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ButtonGhost } from "../button/ghost";
import { ButtonContained } from "../button/contained";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mobileModalStyle } from "./style";
import { ErrorMessage } from "../form-errors/component";
import { useContext, useState } from "react";
import { UserContext } from "@/context/session";
import { ResponseData, useErrorHandling } from "@/hooks/error-handling";

import { usePostIdStore } from "@/stores/post-id-store/postIdStore";
import { commentsSchema } from "@/schemas/comments.schema";
import { sendComment } from "@/actions/sendComment/action";

type ModalProps = {
  open: boolean;
  onOpen: () => void;
};

export function CreateCommentMobile({ open = false, onOpen }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const { loggedUser } = useContext(UserContext);
  const { errorValidation } = useErrorHandling();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const postId = usePostIdStore((state) => state.id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<commentInputs>({
    resolver: zodResolver(commentsSchema),
  });

  const onSubmit: SubmitHandler<commentInputs> = async (data) => {
    setLoading(true);
    try {
      const newData = {
        ...data,
        user: loggedUser?.id,
        post: postId,
      };

      const response: ResponseData = await sendComment(newData);

      if (response.status !== 201) {
        errorValidation(response);
      }
    } catch (error: any) {
      errorValidation(error);
    } finally {
      onOpen();
      setLoading(false);
      reset();
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        onOpen();
        reset();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={mobileModalStyle}
        width={isMobile ? "380px" : "500px"}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Paper sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
          <Typography alignSelf="center" fontSize="2rem" color="primary.light">
            New Comment
          </Typography>

          <Box>
            <TextField
              fullWidth
              id="content"
              multiline
              rows={6}
              label="Comment"
              variant="outlined"
              {...register("content")}
            />
            {errors.content && (
              <ErrorMessage>{errors.content.message}</ErrorMessage>
            )}
          </Box>

          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            gap={4}
          >
            <ButtonGhost
              onClick={() => {
                onOpen();
                reset();
              }}
              fullWidth
              color="primary"
            >
              Cancel
            </ButtonGhost>

            <ButtonContained
              fullWidth
              type="submit"
              color="primary"
              loading={loading}
            >
              Comment
            </ButtonContained>
          </Box>
        </Paper>
      </Stack>
    </Modal>
  );
}
