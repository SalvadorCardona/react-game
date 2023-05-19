import { WebGLRenderer } from "three"

export default function createRenderer(): WebGLRenderer {
  const renderer = new WebGLRenderer({ antialias: true })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  return renderer
}
