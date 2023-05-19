import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import CoordinableInterface from "@/Module/Shared/Domain/CoordinableInterface.ts"
import cowModel from "@/Module/Game/Object3d/Cow/cowModel.ts"

const cowList: Record<string, "left" | "right"> = {}

export default function createCow(
  gameState: GameStateInterface,
  position: CoordinableInterface
): void {
  cowModel().then((gltf) => {
    const model = gltf.scene.clone()

    model.position.set(position.x, position.y, position.z)
    cowList[model.uuid] = Math.random() > 0.5 ? "left" : "right"
    model.scale.set(1.3, 1.3, 1.3)

    gameState.add(model)
    gameState.addAction(() => {
      if (cowList[model.uuid] === "left") {
        model.position.x -= 0.1
        if (model.position.x < -3) {
          cowList[model.uuid] = "right"
          model.rotation.y = Math.PI / 2
        }
      }
      if (cowList[model.uuid] === "right") {
        model.position.x += 0.1
        if (model.position.x > 3) {
          cowList[model.uuid] = "left"
          model.rotation.y = 1.5 * Math.PI
        }
      }
    })
  })
}
