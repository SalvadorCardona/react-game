import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"

export default function cameraBehavior(gameState: GameStateInterface): void {
  gameState.camera.position.set(
    gameState.camera.position.x,
    gameState.camera.position.y,
    gameState.player.position.z + 30
  )
}
