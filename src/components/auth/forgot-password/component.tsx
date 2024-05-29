import { sendVerificationEmail } from "@/actions/user-forgot-password/action";
import { ButtonContained } from "@/components/button/contained";
import { useErrorHandling } from "@/hooks/error-handling";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";

type VerificationEmailInputs = {
  email: string;
  password: string;
} & FormData;

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationEmailInputs>({});
  const router = useRouter();
  const { errorValidation } = useErrorHandling();

  const onSubmit: SubmitHandler<VerificationEmailInputs> = async (data) => {
    setLoading(true);
    const response = await sendVerificationEmail(data);
    setLoading(false);

    if (response.status === 200) {
      Swal.fire({
        title: "Email successfully sent",
        text: "Check your email to access the password change link",
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
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 2,
      }}
    >
      <Box gap={1} display="flex" flexDirection="column">
        <Typography textAlign="center" variant="h5" color="primary.light">
          Forgot Password
        </Typography>
        <Typography textAlign="center" variant="caption" color="text.secondary">
          We will send an email to the email address provided with a link to
          reset your password, check your inbox or spam. The link is valid for 1
          hour.
        </Typography>
      </Box>
      <Box>
        <TextField
          fullWidth
          id="email"
          label="E-mail"
          variant="outlined"
          {...register("email")}
        />
      </Box>

      <Box width="200px" alignSelf="center">
        <ButtonContained
          type="submit"
          fullWidth
          color="primary"
          loading={loading}
        >
          Send E-mail
        </ButtonContained>
      </Box>
    </Paper>
  );
};
export { ForgotPassword };
