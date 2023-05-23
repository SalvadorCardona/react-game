import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import createGround from "@/Module/Game/Object3d/Ground/createGround.ts"
import createDirectionalLight from "@/Module/Game/Object3d/Level/createDirectionalLight.ts"
import createHemisphereLight from "@/Module/Game/Object3d/Level/createHemisphereLight.ts"
import createPlayer from "@/Module/Game/Object3d/Player/createPlayer.ts"
import cameraBehavior from "@/Module/Game/Object3d/Camera/cameraBehavior.ts"
import mainLevelGenerator from "@/Module/Game/Object3d/Level/Generator/mainLevelGenerator.ts"
import autoRunPlayer from "@/Module/Game/Object3d/Player/autoRunPlayer.ts"
import detectPlayerCollisionAction from "@/Module/Game/Object3d/Player/detectPlayerCollisionAction.ts"
import { createRoad } from "@/Module/Game/Object3d/Road/createRoad.ts"
import startLevelMusic from "@/Module/Game/Object3d/Level/startLevelMusic.ts"

export default function createMainLevel(gameStore: GameStateInterface): void {
  createPlayer(gameStore)
  mainLevelGenerator(gameStore)
  createRoad(gameStore)

  gameStore.add(createDirectionalLight())
  gameStore.add(createHemisphereLight())
  gameStore.add(createGround())
  gameStore.addAction(cameraBehavior)
  gameStore.addAction(autoRunPlayer)
  gameStore.addAction(detectPlayerCollisionAction)

  gameStore.start()

  startLevelMusic(gameStore)
}
