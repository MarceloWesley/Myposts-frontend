import { Stack } from "@mui/material";

import { ForgotPassword } from "@/components/auth/forgot-password";

export default function LoginPage() {
  return (
    <Stack width="100%" maxWidth="500px">
      <ForgotPassword />
    </Stack>
  );
}
