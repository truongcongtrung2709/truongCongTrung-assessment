import React from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./routers/routes";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
