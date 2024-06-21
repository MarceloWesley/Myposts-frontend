"use client";
import { useToastMessage } from "../toast-message";

export type ResponseData = {
  message?: string;
  error?: string;
  statusCode?: number;
  status?: number;
  statusText?: string;
};

export function useErrorHandling() {
  const { ToastF } = useToastMessage();

  const errorValidation = (response: ResponseData) => {
    const code = response.statusCode ?? response.status;
    const message = response.message || response.statusText || "Unknown Error";

    const getMessage = (message: string | string[]) => {
      return Array.isArray(message) ? message[0] : message;
    };

    switch (code) {
      case 401:
        ToastF({
          message: getMessage(message),
          type: "error",
        });
        break;
      case 404:
        ToastF({
          message: getMessage(message),
          type: "error",
        });
        break;
      case 400:
        ToastF({
          message: getMessage(message),
          type: "error",
        });
        break;
      case 500:
        ToastF({
          message: "Internal server error",
          type: "error",
        });
        break;

      default:
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
