import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import { coinModel } from "@/Module/Game/Object3d/Coin/coinModel.ts"
import CoordinableInterface from "@/Module/Shared/Domain/CoordinableInterface.ts"

export default function createCoin(
  gameState: GameStateInterface,
  position: CoordinableInterface
): void {
  coinModel().then((gltf) => {
    const model = gltf.scene.clone()
    model.position.set(position.x, position.y + 1, position.z)
    gameState.add(model)
    gameState.addAction(() => {
      model.rotation.y += 0.1
    })
  })
}
