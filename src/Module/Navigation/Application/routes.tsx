import { RouteObject as RouteObjectBase } from "react-router-dom"
import { HomePage } from "../../Home/Page/HomePage.tsx"
import { GamePage } from "../../Game/Page/GamePage.tsx"

interface NavigationItemInterface {
  name: string
  // icon: ComponentType
}

type RouteObjectApp = RouteObjectBase & NavigationItemInterface

export enum RoutesEnum {
  MAIN = "main",
  GAME = "game",
}

export const routes: RouteObjectApp[] = [
  {
    path: "/",
    element: <HomePage />,
    id: RoutesEnum.MAIN,
    name: "Home",
  },
  {
    path: "/game",
    element: <GamePage />,
    id: RoutesEnum.GAME,
    name: "Game",
  },
]
