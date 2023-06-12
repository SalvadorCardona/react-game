import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"

const speed = 0.3

export default function controllerBehavior(gameState: GameStateInterface): void {
  console.log("a")
  addEventListener("keydown", (event) => {
    const camera = gameState.camera
    console.log("v")
    if (event.key === "ArrowLeft") {
      camera.position.x -= speed
    }
    if (event.key === "ArrowRight") {
      camera.position.x += speed
    }
    if (event.key === "ArrowUp") {
      camera.position.z -= speed
    }
    if (event.key === "ArrowDown") {
      camera.position.z += speed
    }
    if (event.key === "8") {
      camera.rotation.x += speed
    }
    if (event.key === "2") {
      camera.rotation.x -= speed
    }
    console.log(camera.position)
  })

  addEventListener("wheel", (event) => {
    const delta = Math.sign(event.deltaY)

    if (delta === 1) {
      gameState.camera.position.y += speed
    }
    if (delta === -1) {
      gameState.camera.position.y -= speed
    }
  })
}
