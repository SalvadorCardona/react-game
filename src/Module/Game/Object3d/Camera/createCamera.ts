import { PerspectiveCamera } from "three"
import { Camera } from "@react-three/fiber"

export default function createCamera(): Camera {
  const camera = new PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    300
  )
  camera.position.set(0, 10, 0)

  return camera
}
