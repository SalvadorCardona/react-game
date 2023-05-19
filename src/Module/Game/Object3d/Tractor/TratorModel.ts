import { GLTF } from "three-stdlib"
import ModelGltf from "./model.glb?url"
import GltfLoader from "@/Module/Shared/Application/GltfLoader.ts"

export function TractorModel(): Promise<GLTF> {
  return GltfLoader(ModelGltf)
}
