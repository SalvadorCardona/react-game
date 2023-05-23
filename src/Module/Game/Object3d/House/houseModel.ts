import ModelGltf from "./model.glb?url"
import gltfLoader from "@/Module/Shared/Application/gltfLoader.ts"
import { GLTF } from "three-stdlib"

export const houseModelUrl = ModelGltf
export default function houseModel(): Promise<GLTF> {
  return gltfLoader(houseModelUrl)
}
