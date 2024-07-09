"use client";

import { ButtonContained } from "@/components/button/contained";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" gap={1}>
      <Typography textAlign="center" variant="h5">
        Something went Wrong
      </Typography>
      <ButtonContained onClick={() => router.push("/home")}>
        Back to Home
      </ButtonContained>
    </Box>
  );
}
