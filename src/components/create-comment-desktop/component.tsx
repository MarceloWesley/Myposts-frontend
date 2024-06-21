"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ButtonContained } from "../button/contained";
import { useEffect, useState } from "react";
import { CreateCommentMobile } from "../create-comment-mobile";

export function CreateCommentDesktop() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const result = useMediaQuery(theme.breakpoints.down("tablet"));

  const handleAddPost = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (result !== true) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [result]);

  return (
    <>
      {!isMobile && (
        <>
          <Box display="flex" justifyContent="flex-end">
            <ButtonContained onClick={handleAddPost}>
              Create Comment
            </ButtonContained>
          </Box>
          <CreateCommentMobile open={open} onOpen={handleAddPost} />
        </>
      )}
    </>
  );
}
