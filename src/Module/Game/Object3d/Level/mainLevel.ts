import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import createGround from "@/Module/Game/Domain/Factory/createGround.ts"
import createDirectionalLight from "@/Module/Game/Domain/Factory/createDirectionalLight.ts"
import createHemisphereLight from "@/Module/Game/Domain/Factory/createHemisphereLight.ts"
import createPlayer from "@/Module/Game/Domain/Factory/createPlayer.ts"
import cameraBehavior from "@/Module/Game/Domain/Behavior/cameraBehavior.ts"
import generateCoins from "@/Module/Game/Domain/Generator/generateCoins.ts"
import autoRunPlayer from "@/Module/Game/Domain/Action/autoRunPlayer.ts"
import detectCollisionAction from "@/Module/Game/Domain/Action/detectCollisionAction.ts"
import { generateRoad } from "@/Module/Game/Domain/Factory/createRoad.ts"
import startLevelMusic from "@/Module/Game/Object3d/Level/startLevelMusic.ts"

export default function mainLevel(gameStore: GameStateInterface): void {
  createPlayer(gameStore)
  generateCoins(gameStore)
  generateRoad(gameStore)

  gameStore.add(createDirectionalLight())
  gameStore.add(createHemisphereLight())
  gameStore.add(createGround())
  gameStore.addAction(cameraBehavior)
  gameStore.addAction(autoRunPlayer)
  gameStore.addAction(detectCollisionAction)

  gameStore.start()

  startLevelMusic(gameStore)
}
