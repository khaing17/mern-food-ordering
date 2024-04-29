import { Navigate, Route, Routes } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import HomePage from "./pages/HomePage";
import Auth0CallbackPage from "./pages/Auth0CallbackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayouts>
            <HomePage />
          </RootLayouts>
        }
      />
      <Route path="/auth-callback" element={<Auth0CallbackPage />} />
      <Route path="/user-profile" element={<h1>About</h1>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
