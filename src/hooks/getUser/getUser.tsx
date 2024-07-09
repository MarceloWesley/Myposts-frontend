import { GetUserById } from "@/actions/find-user-by-id/action";
import { useCallback, useEffect, useState } from "react";
import { useErrorHandling } from "../error-handling";

export function useGetUser(id: string) {
  const [user, setUser] = useState();
  const { errorValidation } = useErrorHandling();

  const getUserByID = useCallback(async () => {
    try {
      const response = await GetUserById(id);
      if (response.status !== 200) {
        errorValidation(response);
      }
      setUser(response);
    } catch (error: any) {
      errorValidation(error);
    }
  }, [id]);

  useEffect(() => {
    getUserByID();
  }, [getUserByID]);

  return {
    user,
  };
}
