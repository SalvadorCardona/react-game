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
  return <></>
}
