import { Texture, TextureLoader } from "three"

const loader = new TextureLoader()

export default function textureLoader(textureUrl: string): Promise<Texture> {
  return new Promise((resolve) => {
    loader.load(textureUrl, (texture) => {
      resolve(texture)
    })
  })
}
