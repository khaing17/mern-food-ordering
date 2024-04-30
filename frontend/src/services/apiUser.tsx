export interface CreateUserRequestType {
  auth0Id: string;
  email: string;
}

/**
 * This is unusable due to the structure of auth0
 */

// export const createNewUser = async (user: CreateUserRequestType) => {
//   const response = await fetch(`${apiBaseUrl}/users`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   if (!response.ok) {
//     throw new Error("Error creating new user");
//   }
// };
