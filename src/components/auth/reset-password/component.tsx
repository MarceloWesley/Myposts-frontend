"use client";
import { UserResetPassword } from "@/actions/user-reset-password/action";
import { ButtonContained } from "@/components/button/contained";
import { useErrorHandling } from "@/hooks/error-handling";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

type ResetInputs = {
  code: string;
  email: string;
  password: string;
  confirmPassword: string;
} & FormData;

export function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<ResetInputs>({});
  const { errorValidation } = useErrorHandling();
  const router = useRouter();

  const onSubmit: SubmitHandler<ResetInputs> = async (data) => {
    setLoading(true);
    const response = await UserResetPassword(data);
    setLoading(false);

    if (!response.statusCode) {
      Swal.fire({
        title: "Password changed successfully",
        text: "You will be redirected to login",
        icon: "success",
      }).then(() => {
        router.push("/login");
      });
    } else {
      errorValidation(response);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
      }}
    >
      <Typography alignSelf="center" fontSize="2rem" color="primary.light">
        Change Password
      </Typography>
      <Box>
        <TextField
          fullWidth
          id="code"
          label="Code"
          variant="outlined"
          {...register("code")}
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          {...register("email")}
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          id="password"
          type="password"
          label="New Password"
          variant="outlined"
          {...register("password")}
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          id="confirmPassword"
          type="password"
          label="Confirm New Password"
          variant="outlined"
          {...register("confirmPassword")}
        />
      </Box>

      <Box width="200px" alignSelf="center">
        <ButtonContained
          type="submit"
          fullWidth
          color="primary"
          loading={loading}
        >
          Change
        </ButtonContained>
      </Box>
    </Paper>
  );
}
