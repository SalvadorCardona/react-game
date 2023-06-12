import { GLTF, GLTFLoader } from "three-stdlib"
const currentGltfLoader = new GLTFLoader()

const cache: Record<string, GLTF> = {}
export default function gltfLoader(url: string): Promise<GLTF> {
  return new Promise((resolve) => {
    if (Object.hasOwn(cache, url)) {
      console.log("gltfLoader cache", cache.url)
      resolve(cache.url)
    }

    currentGltfLoader.load(url, (gltf) => {
      gltf.scene.name = url
      gltf.scene.traverse(function (child) {
        child.castShadow = true
      })

      cache[url] = gltf
      resolve(gltf)
    })
  })
}
