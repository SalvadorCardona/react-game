import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import finishLineModel from "@/Module/Game/Object3d/FinishLine/finishLineModel.ts"
import CoordinableInterface from "@/Module/Shared/Domain/CoordinableInterface.ts"

export default function createFinishLine(
  gameStore: GameStateInterface,
  position: CoordinableInterface
): void {
  finishLineModel().then((gltf) => {
    const model = gltf.scene
    model.rotation.y = Math.PI
    model.position.set(-26, 0, position.z)
    model.scale.set(60, 60, 60)
    gameStore.add(model)
  })
}
