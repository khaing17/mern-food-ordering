import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import getInitials from "@/utils/getInitials";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="h-6 w-6 text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex space-x-2 items-center">
                <Avatar>
                  <AvatarImage src={user?.picture} alt={user?.name} />
                  <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
                </Avatar>
                <span className="truncate text-sm text-orange-400">
                  {user?.email}
                </span>
              </span>
            ) : (
              <span>Welcome to MERNEAT.com</span>
            )}
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <SheetDescription className="flex">
          {isAuthenticated ? (
            <Button
              className="flex-1 font-bold bg-orange-500"
              onClick={() => logout()}
            >
              Logout
            </Button>
          ) : (
            <Button
              className="flex-1 font-bold bg-orange-500"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
