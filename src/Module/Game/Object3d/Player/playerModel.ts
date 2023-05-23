import { GLTF } from "three-stdlib"
import ModelGltf from "./model.glb?url"
import gltfLoader from "@/Module/Shared/Application/gltfLoader.ts"

export function TractorModel(): Promise<GLTF> {
  return gltfLoader(ModelGltf)
}
