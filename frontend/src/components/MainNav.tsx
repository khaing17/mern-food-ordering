import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserDropDownMenu from "./UserDropDownMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-3">
      {isAuthenticated ? (
        <UserDropDownMenu />
      ) : (
        <Button
          variant="ghost"
          className="text-orange-500 hover:bg-white font-bold "
          onClick={async () => {
            await loginWithRedirect();
          }}
        >
          Sign Up
        </Button>
      )}
    </span>
  );
};

export default MainNav;
