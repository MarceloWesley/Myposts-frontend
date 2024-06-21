"use client";

import { ButtonContained } from "@/components/button/contained";
import { Box, Typography } from "@mui/material";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" gap={1}>
      <Typography textAlign="center" variant="h5">
        Something went Wrong
      </Typography>
      <ButtonContained onClick={() => reset()}>Try Again</ButtonContained>
    </Box>
  );
}
