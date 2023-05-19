import { GLTF, GLTFLoader } from "three-stdlib"
const gltfLoader = new GLTFLoader()

const cache: Record<string, GLTF> = {}
export default function GltfLoader(url: string): Promise<GLTF> {
  return new Promise((resolve) => {
    if (Object.hasOwn(cache, url)) {
      resolve(cache.url)
    }

    gltfLoader.load(url, (gltf) => {
      gltf.scene.name = url
      gltf.scene.traverse(function (child) {
        child.castShadow = true
      })

      resolve(gltf)
    })
  })
}
