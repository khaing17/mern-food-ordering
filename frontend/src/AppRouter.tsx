import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayouts>
        <HomePage />
      </RootLayouts>
    ),
  },
  {
    path: "/user-profile",
    element: <div>USER PROFILE PAGE</div>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
