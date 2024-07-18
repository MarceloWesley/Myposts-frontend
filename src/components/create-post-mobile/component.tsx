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
import { postsSchema } from "@/schemas/posts.schema";
import { mobileModalStyle } from "./style";
import { ErrorMessage } from "../form-errors/component";
import { useContext, useState } from "react";
import { UserContext } from "@/context/session";
import { ResponseData, useErrorHandling } from "@/hooks/error-handling";
import { sendPost } from "@/actions/sendPost/action";
import { GetAllPosts } from "@/actions/get-All-Posts/action";

type ModalProps = {
  open: boolean;
  onOpen: () => void;
};

export function CreatePostMobile({ open = false, onOpen }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const { loggedUser } = useContext(UserContext);
  const { errorValidation } = useErrorHandling();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostInputs>({
    resolver: zodResolver(postsSchema),
  });

  const onSubmit: SubmitHandler<PostInputs> = async (data) => {
    setLoading(true);
    try {
      const newData = {
        ...data,
        user: loggedUser?.id,
      };

      const response: ResponseData = await sendPost(newData);

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
            New Post
          </Typography>
          <Box>
            <TextField
              fullWidth
              id="title"
              label="Title"
              variant="outlined"
              {...register("title")}
            />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </Box>

          <Box>
            <TextField
              fullWidth
              id="content"
              multiline
              rows={6}
              label="Content"
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
              Post
            </ButtonContained>
          </Box>
        </Paper>
      </Stack>
    </Modal>
  );
}
