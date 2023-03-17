import { createBrowserRouter } from "react-router-dom";
import Signin from "../Modules/Sign in/Signin";
import Profile from "../Modules/Profile/Profile";
import UserProtected from "./UserProtected";
const routes = createBrowserRouter([
  { path: "/", element: <Signin /> },
  {path: "/profile", 
  element:<UserProtected><Profile/>
  </UserProtected>},
  
 
  
  
]);

export default routes;
