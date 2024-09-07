import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Favourite from "./Favourite";
import Catalogue from "./Catalogue";
import Form from "./Form";
import AppLayout from "./AppLayout";
// import { createContext } from "react";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/like",
        element: <Favourite />,
      },
      {
        path: "/cat",
        element: <Catalogue />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
