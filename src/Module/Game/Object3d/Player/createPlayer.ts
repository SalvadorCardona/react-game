import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import { TractorModel } from "@/Module/Game/Object3d/Player/playerModel.ts"
import controllerBehavior from "@/Module/Game/Object3d/Player/controllerBehavior.ts"

export default function createPlayer(gameStore: GameStateInterface): void {
  TractorModel().then((gltf) => {
    const model = gltf.scene
    model.position.set(0, 0, -15)
    model.rotation.y = Math.PI
    gameStore.add(model)
    gameStore.player = model
    controllerBehavior(gameStore)
    model.traverse((child) => {
      if (child.name.indexOf("Wheel") !== -1) {
        gameStore.addAction(() => {
          child.rotation.x += 0.1
        })
      }
    })
  })
}
