import ModelGltf from "./model.glb?url"
import gltfLoader from "@/Module/Shared/Application/gltfLoader.ts"
import { GLTF } from "three-stdlib"

export const cowModelUrl = ModelGltf
export default function cowModel(): Promise<GLTF> {
  return gltfLoader(cowModelUrl)
}
