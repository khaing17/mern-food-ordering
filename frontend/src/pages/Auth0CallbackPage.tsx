import { useCreateUser } from "@/hooks/useCreateUser";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Auth0CallbackPage = () => {
  const navigate = useNavigate();
  const { createUser } = useCreateUser();
  const { user } = useAuth0();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [navigate, createUser, user]);

  return <p>Loading</p>;
};

export default Auth0CallbackPage;
