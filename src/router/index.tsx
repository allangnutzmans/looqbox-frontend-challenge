import { createBrowserRouter, Navigate } from "react-router"
import App from "../App"
import { PokedexView } from "../views/PokedexView"
import { PokeDetails } from "../components/PokeDetails";
import { PokeSearchView } from "../views/PokeSearchView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PokedexView />,
        children: [
          {
            path: "pokemon/:id",
            element: <PokeDetails />
          }
        ]
      },
      {
        path: "search/:id",
        element: <PokeSearchView />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
