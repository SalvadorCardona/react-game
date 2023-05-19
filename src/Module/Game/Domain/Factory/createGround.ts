import { Mesh, MeshPhongMaterial, PlaneGeometry } from "three"

export default function createGround(): Mesh {
  const ground = new Mesh(
    new PlaneGeometry(10000, 10000),
    new MeshPhongMaterial({ color: "#F0EC80", depthWrite: false })
  )

  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  ground.position.set(-1, -1, -15)

  return ground
}
