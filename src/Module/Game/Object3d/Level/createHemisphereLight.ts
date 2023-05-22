import { HemisphereLight, Object3D } from "three"

export default function createHemisphereLight(): Object3D {
  const hemiLight = new HemisphereLight(0xffffff, 0x444444)
  hemiLight.position.set(0, 20, 0)

  return hemiLight
}
