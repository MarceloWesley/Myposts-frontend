"use client";
import { LoginUser } from "@/actions/user-login/action";
import { ButtonContained } from "@/components/button/contained";
import { UserContext } from "@/context/session";
import { useErrorHandling } from "@/hooks/error-handling";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginInputs = {
  email: string;
  password: string;
} & FormData;

export function Login() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<LoginInputs>({});
  const theme = useTheme();
  const router = useRouter();
  const { errorValidation } = useErrorHandling();
  const { setToken } = useContext(UserContext);

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await LoginUser(data);

      const statusCode = response.statusCode;

      if (statusCode !== 401 && statusCode !== 404) {
        setToken(response.token);
        router.push("/home");
      } else {
        errorValidation(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
        Login
      </Typography>
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
          label="Password"
          variant="outlined"
          {...register("password")}
        />
        <Box>
          <Button>
            <Link
              style={{
                textDecoration: "none",
                color: theme.palette.primary.light,
              }}
              href="/forgot-password"
            >
              forgot my password
            </Link>
          </Button>
          <Typography pl={1} variant="body2">
            Don't have an account ?
            <Button color="primary">
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.light,
                }}
                href="/register"
              >
                Register
              </Link>
            </Button>
          </Typography>
        </Box>
      </Box>

      <Box width="200px" alignSelf="center">
        <ButtonContained
          type="submit"
          fullWidth
          color="primary"
          loading={loading}
        >
          Enter
        </ButtonContained>
      </Box>
    </Paper>
  );
}
