import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import CoordinableInterface from "@/Module/Shared/Domain/CoordinableInterface.ts"
import houseModel from "@/Module/Game/Object3d/House/houseModel.ts"

export default function createHouse(
  gameState: GameStateInterface,
  position: CoordinableInterface
): void {
  houseModel().then((gltf) => {
    const model = gltf.scene
    model.position.set(position.x, position.y, position.z)
    model.scale.set(20, 20, 20)
    gameState.add(model)
  })
}
