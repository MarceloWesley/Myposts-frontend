"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { mobileModalStyle } from "./style";
import { ButtonContained } from "@/components/button/contained";
import { ButtonGhost } from "@/components/button/ghost";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postsSchema } from "@/schemas/posts.schema";
import { ErrorMessage } from "@/components/form-errors/component";
import { UserContext } from "@/context/session";
import { sendPost } from "@/actions/sendPost/action";
import { RevalidatePost } from "@/actions/revalidates/revalidate-posts";

const MobileNavigation = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { loggedUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostInputs>({
    resolver: zodResolver(postsSchema),
  });

  const handleAddPost = () => {
    setOpen((prev) => !prev);
    reset();
  };

  const onSubmit: SubmitHandler<PostInputs> = async (data) => {
    setLoading(true);
    try {
      const newData = {
        ...data,
        user: loggedUser?.id,
      };
      const response = await sendPost(newData);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    } finally {
      setOpen((prev) => !prev);
      setLoading(false);
      RevalidatePost();
    }
  };

  return (
    <>
      <BottomNavigation
        sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: "9999" }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          onClick={() => router.push("/home")}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={handleAddPost}
          label="New post"
          value=""
          icon={<AddIcon />}
        />

        <BottomNavigationAction
          label="Profile"
          onClick={() => router.push("/profile")}
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>

      {/* MODAL DE CRIAR POSTS */}

      <Modal
        open={open}
        onClose={handleAddPost}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          sx={mobileModalStyle}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Paper
            sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
          >
            <Typography
              alignSelf="center"
              fontSize="2rem"
              color="primary.light"
            >
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
              <ButtonGhost onClick={handleAddPost} fullWidth color="primary">
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
    </>
  );
};

export { MobileNavigation };
