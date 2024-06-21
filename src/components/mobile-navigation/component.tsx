"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { CreatePostMobile } from "../create-post-mobile/component";
import { CreateCommentMobile } from "../create-comment-mobile";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const MobileNavigation = () => {
  const router = useRouter();
  const [postModal, setPostModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isPostPage = pathname.includes("/post");

  const handleOpenMenu = useCallback(() => {
    if (isPostPage) {
      setPostModal(false);
      return setCommentModal((prev) => !prev);
    }
    setCommentModal(false);
    return setPostModal((prev) => !prev);
  }, [pathname]);

  return (
    <>
      <BottomNavigation
        sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: "999" }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          onClick={() => router.push("/home")}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={handleOpenMenu}
          label="New post"
          value=""
          icon={
            isPostPage ? (
              <ChatBubbleIcon
                sx={{ fontSize: "1.3rem", color: theme.palette.primary.light }}
              />
            ) : (
              <AddIcon sx={{ color: theme.palette.primary.light }} />
            )
          }
        />

        <BottomNavigationAction
          label="Profile"
          onClick={() => router.refresh()}
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>

      {/* MODAL DE CRIAR POSTS */}
      <CreatePostMobile open={postModal} onOpen={handleOpenMenu} />

      {/* MODAL DE CRIAR COMENTARIOS */}
      <CreateCommentMobile open={commentModal} onOpen={handleOpenMenu} />
    </>
  );
};

export { MobileNavigation };
