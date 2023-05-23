import ModelGltf from "./model.glb?url"
import gltfLoader from "@/Module/Shared/Application/gltfLoader.ts"
import { GLTF } from "three-stdlib"

export const finishLineModelUrl = ModelGltf
export default function finishLineModel(): Promise<GLTF> {
  return gltfLoader(finishLineModelUrl)
}
