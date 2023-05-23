import "./HomePage.css"
import backGroundImage from "../Asset/farm-wallper.webp?url"
import { Button, Center } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RoutesEnum } from "@/Module/Navigation/Application/routes.tsx"
import { getPathById } from "@/Module/Navigation/Application/getPathById.tsx"

export function HomePage() {
  const style = {
    backgroundImage: `url(${backGroundImage})`,
    backgroundSize: "cover",
  }

  return (
    <Center className={"container"} style={style}>
      <Button colorScheme="gray" size="sm">
        <Link to={getPathById(RoutesEnum.GAME)} itemID={RoutesEnum.GAME}>
          Play the game
        </Link>
      </Button>
    </Center>
  )
}
