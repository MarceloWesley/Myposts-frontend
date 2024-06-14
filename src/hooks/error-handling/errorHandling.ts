"use client";
import { useToastMessage } from "../toast-message";

type responseValidationProps = {
  message: string;
  error: string;
  statusCode: number;
};

export function useErrorHandling() {
  const { ToastF } = useToastMessage();

  const errorValidation = (response: responseValidationProps) => {
    const getMessage = (message: string | string[]) => {
      return Array.isArray(message) ? message[0] : message;
    };

    switch (response.statusCode) {
      case 401:
        ToastF({
          message: getMessage(response.message),
          type: "error",
        });
        break;
      case 404:
        ToastF({
          message: getMessage(response.message),
          type: "error",
        });
        break;
      case 400:
        ToastF({
          message: getMessage(response.message),
          type: "error",
        });
        break;
      case 500:
        ToastF({
          message: "Internal server error",
          type: "error",
        });
        break;
    }
  };

  return {
    errorValidation,
  };
}
