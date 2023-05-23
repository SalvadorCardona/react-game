import { Mesh, MeshBasicMaterial, PlaneGeometry, RepeatWrapping } from "three"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"
import grassTexture from "./grass-texture.jpg?url"
import textureLoader from "@/Module/Shared/Application/textureLoader.ts"

export default function createGround(): Mesh {
  const ground = new Mesh(
    new PlaneGeometry(
      mainLevelConfiguration.levelSizeX,
      mainLevelConfiguration.levelSizeZ
    )
  )

  textureLoader(grassTexture).then((texture) => {
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(100, 100)
    ground.material = new MeshBasicMaterial({ map: texture })
  })

  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  ground.position.set(-1, -1, -15)

  return ground
}
