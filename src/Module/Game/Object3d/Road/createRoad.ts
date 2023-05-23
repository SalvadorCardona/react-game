import {
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PlaneGeometry,
  RepeatWrapping,
  Vector3,
} from "three"
import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"
import roadTexture from "./road-texture.jpg?url"
import textureLoader from "@/Module/Shared/Application/textureLoader.ts"

export function createRoad(gameState: GameStateInterface): void {
  const roadGeometry = new PlaneGeometry(15, mainLevelConfiguration.levelSizeZ)
  const roadMaterial = new MeshBasicMaterial({ color: 0x888888 })
  const road = new Mesh(roadGeometry, roadMaterial)
  road.rotation.x = -Math.PI / 2

  textureLoader(roadTexture).then((texture) => {
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(10, 5)
    texture.anisotropy = 1
    road.material = new MeshPhongMaterial({ map: texture })
  })

  const startPosition = new Vector3(5, 0, -15)

  road.translateX(startPosition.x)

  gameState.add(road)
}
