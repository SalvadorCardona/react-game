import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"

export default function autoRunPlayer(gameState: GameStateInterface): void {
  gameState.player.position.z -= 0.5
}
