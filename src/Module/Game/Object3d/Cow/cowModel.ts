import ModelGltf from "./model.glb?url"
import GltfLoader from "@/Module/Shared/Application/GltfLoader.ts"
import { GLTF } from "three-stdlib"

export const cowModelUrl = ModelGltf
export default function cowModel(): Promise<GLTF> {
  return GltfLoader(cowModelUrl)
}
