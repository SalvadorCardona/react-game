import { GLTF } from "three-stdlib"
import ModelGltf from "./Coin.glb?url"
import GltfLoader from "@/Module/Shared/Application/GltfLoader.ts"

export const coinModelUrl = ModelGltf
export function coinModel(): Promise<GLTF> {
  return GltfLoader(ModelGltf)
}
