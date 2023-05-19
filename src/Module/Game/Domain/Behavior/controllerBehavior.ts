import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"

export default function controllerBehavior(gameState: GameStateInterface): void {
  addEventListener("keydown", (event) => {
    const position = {
      x: gameState.player.position.x,
      y: gameState.player.position.y,
      z: gameState.player.position.z,
    }
    //
    // if (event.key === "ArrowUp") {
    //   position.z -= 0.1
    // }
    // if (event.key === "ArrowDown") {
    //   position.z += 0.1
    // }
    if (event.key === "ArrowLeft") {
      position.x -= 0.2
    }
    if (event.key === "ArrowRight") {
      position.x += 0.2
    }

    gameState.player.position.set(position.x, position.y, position.z)
  })
}
