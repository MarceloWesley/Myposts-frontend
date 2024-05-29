"use client";
import { createUser } from "@/actions/user-register/action";
import { ButtonContained } from "@/components/button/contained";
import { ErrorMessage } from "@/components/form-errors/component";
import { useErrorHandling } from "@/hooks/error-handling";
import { registerUsersSchema } from "@/schemas/register-user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type RegisterInputs = {
  username: string;
  email: string;
  password: string;
} & FormData;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerUsersSchema),
  });
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const { errorValidation } = useErrorHandling();

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    setLoading(true);
    const response = await createUser(data);
    setLoading(false);

    if (!response.error) {
      router.push("/login");
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
        Register
      </Typography>
      <Box>
        <TextField
          fullWidth
          id="username"
          label="Username"
          variant="outlined"
          {...register("username")}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
      </Box>
      <Box>
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Box>
      <Box>
        <TextField
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </Box>

      <Box width="200px" alignSelf="center">
        <ButtonContained
          type="submit"
          fullWidth
          color="primary"
          loading={loading}
        >
          Register
        </ButtonContained>
      </Box>
    </Paper>
  );
};
export { Register };
