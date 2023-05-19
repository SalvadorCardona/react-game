import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import { useState } from "react"
import { Card, CardBody, Text, Image, Flex, Box } from "@chakra-ui/react"
import coinUrl from "./Asset/coin.png?url"

export interface InterfaceGameComponentPropsInterface {
  gameState: GameStateInterface
}

export function InterfaceGameComponent({
  gameState,
}: InterfaceGameComponentPropsInterface) {
  const [frameChanged, setFrameChanged] = useState(true)

  gameState.addAction(() => {
    setFrameChanged(!frameChanged)
  })

  const style = {
    height: "20px",
    position: "fixed",
    top: 0,
    width: "400px",
  }

  return (
    <div style={style}>
      <Card>
        <CardBody>
          <Text fontSize="xl">Score :</Text>
          <Flex alignItems="center">
            <Box marginRight={15}>
              <Image src={coinUrl} width={10} height={10} alt="Dan Abramov" />
            </Box>
            <Box>
              <Text fontSize="6xl" as="b">
                {gameState.score.coin}
              </Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </div>
  )
}
