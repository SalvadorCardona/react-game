import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"

export default function controllerBehavior(gameState: GameStateInterface): void {
  addEventListener("keydown", (event) => {
    const position = {
      x: gameState.player.position.x,
      y: gameState.player.position.y,
      z: gameState.player.position.z,
    }
    console.log(gameState.player.position)
    if (
      event.key === "ArrowLeft" &&
      mainLevelConfiguration.roadStartX < gameState.player.position.x
    ) {
      position.x -= 0.2
    }
    if (
      event.key === "ArrowRight" &&
      mainLevelConfiguration.roadEndX > gameState.player.position.x
    ) {
      position.x += 0.2
    }

    gameState.player.position.set(position.x, position.y, position.z)
  })
}
