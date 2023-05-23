import { GLTF } from "three-stdlib"
import ModelGltf from "./Coin.glb?url"
import gltfLoader from "@/Module/Shared/Application/gltfLoader.ts"

export const coinModelUrl = ModelGltf
export function coinModel(): Promise<GLTF> {
  return gltfLoader(ModelGltf)
}
