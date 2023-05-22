import {
  BoxGeometry,
  GridHelper,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Vector3,
} from "three"
import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"

export default function createHelper(gameStore: GameStateInterface): void {
  const size = 10
  const divisions = 10
  gameStore.add(new GridHelper(size, divisions))

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new Mesh(geometry, material)

  const referencePosition = new Vector3(mainLevelConfiguration.roadEndX, 1, -15)

  cube.translateX(referencePosition.x)
  cube.translateY(referencePosition.y)
  cube.translateZ(referencePosition.z)

  gameStore.add(cube)
}
