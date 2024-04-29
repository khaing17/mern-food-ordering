import { CreateNewUser } from "@/services/apiUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: createUser,
    isError,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: CreateNewUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { createUser, isError, isPending, isSuccess };
};
