import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import { Box3 } from "three"
import collisionBehavior from "@/Module/Game/Object3d/Player/collisionBehavior.ts"

export default function detectPlayerCollisionAction(
  gameState: GameStateInterface
): void {
  const playerBox = new Box3().setFromObject(gameState.player)
  gameState.scene.children.forEach((child) => {
    if (gameState.player.id === child.id) return
    const enemyBox = new Box3().setFromObject(child)
    const collision = playerBox.intersectsBox(enemyBox)
    if (collision) {
      collisionBehavior(gameState.player, child)
    }
  })
}
