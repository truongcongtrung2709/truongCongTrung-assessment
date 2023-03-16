import { createBrowserRouter } from "react-router-dom";
import Signin from "../Modules/Sign in/Signin";
import Profile from "../Modules/Profile/Profile";
const routes = createBrowserRouter([
  { path: "/", element: <Signin /> },
  { path: "/profile", element: <Profile /> },
]);

export default routes;
