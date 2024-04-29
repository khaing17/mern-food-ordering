import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import getInitials from "@/utils/getInitials";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UserDropDownMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.picture} />
          <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 bg-orange-500"
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDownMenu;
