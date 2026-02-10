import { createBrowserRouter } from "react-router"
import App from "../App"
import { PokedexView } from "../views/PokedexView"
import { StatsView } from "../views/StatsView"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <PokedexView />
      },
      {
        path: "/stats",
        element: <StatsView />
      }
    ]
  }
])
