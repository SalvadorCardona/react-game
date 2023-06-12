import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three"
import createThree from "@/Module/Game/Object3d/Three/createThree.ts"

const size = 50
export default function mainLevelGenerator(gameState: GameStateInterface): void {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cube = new Mesh(
        new BoxGeometry(1, 1, 1),
        new MeshBasicMaterial({ color: 0x00ff00 })
      )
      const vector = new Vector3(i, 0, j)

      cube.position.copy(vector)
      createThree(gameState, vector)
      gameState.add(cube)
    }
  }
}
