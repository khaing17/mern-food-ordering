import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNewUserRequestType } from "@/types/user";
import { apiBaseUrl } from "./../config/config";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();
  const createNewUser = async (user: CreateNewUserRequestType) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${apiBaseUrl}/users`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isError,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: createNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { createUser, isError, isPending, isSuccess };
};
