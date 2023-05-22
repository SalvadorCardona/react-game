import { Mesh, MeshPhongMaterial, PlaneGeometry } from "three"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"

export default function createGround(): Mesh {
  const ground = new Mesh(
    new PlaneGeometry(
      mainLevelConfiguration.levelSizeX,
      mainLevelConfiguration.levelSizeZ
    ),
    new MeshPhongMaterial({ color: "#F0EC80", depthWrite: false })
  )

  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  ground.position.set(-1, -1, -15)

  return ground
}
