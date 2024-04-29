import { apiBaseUrl } from "@/config/config";
import { useAuth0 } from "@auth0/auth0-react";

interface CreateUserRequestType {
  auth0Id: string;
  email: string;
}

export const CreateNewUser = async (user: CreateUserRequestType) => {
  const { getAccessTokenSilently } = useAuth0();
  const token = await getAccessTokenSilently();
  const response = await fetch(`${apiBaseUrl}/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Error creating new user");
  }
  return response.json();
};
