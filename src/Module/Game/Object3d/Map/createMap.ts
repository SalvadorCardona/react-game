import { GLTF } from "three-stdlib"
import ModelGltf from "./model.glb?url"
import gltfLoader from "@/Module/Shared/Application/gltfLoader.ts"
import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import { Vector3 } from "three"

export const threeUrl = ModelGltf
export function threeModel(): Promise<GLTF> {
  return gltfLoader(threeUrl)
}

export default function createMap(
  gameState: GameStateInterface,
  vector: Vector3
): void {
  threeModel().then((gltf) => {
    const model = gltf.scene.clone()
    model.position.copy(vector)
    gameState.add(model)
  })
}
