import { createBrowserRouter } from "react-router"
import App from "../App"
import { PokedexView } from "../views/PokedexView"
import { StatsView } from "../views/StatsView"
import { PokeDetails } from "../components/PokeDetails";

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
            path: "/pokemon/:id",
            element: <PokeDetails />
          }
        ]
      },
      {
        path: "stats",
        element: <StatsView />
      }
    ]
  }
]);
