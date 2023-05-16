import { routes, RoutesEnum } from "@/Module/Navigation/Application/routes.tsx"

export const getPathById = (id: RoutesEnum): string => {
  const route = routes.find((route) => route.id === id)
  return route?.path ?? ""
}
