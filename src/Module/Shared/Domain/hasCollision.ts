import { Object3D } from "three"

export default function hasCollision(objet1: Object3D, objet2: Object3D): boolean {
  return objet1.position.distanceTo(objet2.position) < 1
}
