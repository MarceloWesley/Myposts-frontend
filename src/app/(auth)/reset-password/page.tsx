"use client";

import { Stack } from "@mui/material";

import { ResetPassword } from "@/components/auth/reset-password";

export default function RegisterPage() {
  return (
    <Stack width="100%" maxWidth="500px">
      <ResetPassword />
    </Stack>
  );
}