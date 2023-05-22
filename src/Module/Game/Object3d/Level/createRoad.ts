import { Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three"
import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"

export function createRoad(gameState: GameStateInterface): void {
  const roadGeometry = new PlaneGeometry(15, mainLevelConfiguration.levelSizeZ)
  const roadMaterial = new MeshBasicMaterial({ color: 0x888888 })
  const road = new Mesh(roadGeometry, roadMaterial)
  road.rotation.x = -Math.PI / 2

  const startPosition = new Vector3(5, 0, -15)

  road.translateX(startPosition.x)

  gameState.add(road)
}
