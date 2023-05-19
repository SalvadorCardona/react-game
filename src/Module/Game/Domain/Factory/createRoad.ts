import { Mesh, MeshBasicMaterial, Object3D, PlaneGeometry } from "three"
import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"

const roadWidth = 10
const roadLength = 10000
const roadGeometry = new PlaneGeometry(roadWidth, roadLength)
const roadMaterial = new MeshBasicMaterial({ color: 0x888888 })

export default function createRoad(): Object3D {
  const road = new Mesh(roadGeometry, roadMaterial)
  road.rotation.x = -Math.PI / 2

  return road
}

export function generateRoad(gameState: GameStateInterface): void {
  const randomWidth = Math.random() * (roadWidth - 5) + 5
  const randomLength = Math.random() * (roadLength - 50) + 50
  // roadGeometry = new THREE.PlaneGeometry(randomWidth, randomLength)
  const road = new Mesh(roadGeometry, roadMaterial)
  road.rotation.x = -Math.PI / 2
  gameState.add(road)
}
