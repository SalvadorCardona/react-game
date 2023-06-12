import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import createPlayer from "@/Module/Game/Object3d/Player/createPlayer.ts"
import mainLevelGenerator from "@/Module/Game/Object3d/Level/Generator/mainLevelGenerator.ts"
import controllerBehavior from "@/Module/Game/Object3d/Player/controllerBehavior.ts"
import createMap from "@/Module/Game/Object3d/Map/createMap.ts"
import { Vector3 } from "three"

export default function createMainLevel(gameStore: GameStateInterface): void {
  // mainLevelGenerator(gameStore)
  createMap(gameStore, new Vector3(0, 0, 0))
  controllerBehavior(gameStore)
  gameStore.start()
}
