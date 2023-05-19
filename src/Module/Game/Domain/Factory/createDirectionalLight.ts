import { DirectionalLight } from "three"

export default function createDirectionalLight(): DirectionalLight {
  const dirLight = new DirectionalLight(0xffffff)
  dirLight.position.set(-3, 10, -10)
  dirLight.castShadow = true
  dirLight.shadow.camera.top = 4
  dirLight.shadow.camera.bottom = -4
  dirLight.shadow.camera.left = -4
  dirLight.shadow.camera.right = 4
  dirLight.shadow.camera.near = 0.1
  dirLight.shadow.camera.far = 40

  return dirLight
}
