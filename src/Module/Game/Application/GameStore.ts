import { Mesh, Object3D, Renderer, Scene } from "three"
import createCamera from "@/Module/Game/Object3d/Camera/createCamera.ts"
import { Camera } from "@react-three/fiber"
import createRenderer from "@/Module/Game/Object3d/Level/createRenderer.ts"
import createScene from "@/Module/Game/Object3d/Level/createScene.ts"

type ActionCallBack = (gameState: GameStateInterface) => void

export interface GameStateInterface {
  container: HTMLDivElement | null
  gameObject: Object3D[]
  actions: ActionCallBack[]
  player: Object3D
  camera: Camera
  scene: Scene
  renderer: Renderer
  add: (item: Object3D) => void
  remove: (item: Object3D) => void
  update: (item: Object3D) => void
  render: () => void
  start: () => void
  addAction: (action: ActionCallBack) => void
  score: { coin: number }
}

const renderer = createRenderer()

const gameState: GameStateInterface = {
  score: { coin: 0 },
  actions: [],
  container: null,
  scene: createScene(renderer),
  renderer: renderer,
  gameObject: [],
  player: new Mesh(),
  camera: createCamera(),
  add: function (item: Object3D) {
    this.scene.add(item)
    this.render()
  },
  remove: function (item: Object3D) {
    this.render()
  },
  update: function (item: Object3D) {
    this.render()
  },
  render: function () {
    this.renderer.render(this.scene, this.camera)
  },
  start: function () {
    setInterval(() => {
      this.actions.map((action) => action(this))
      this.render()
    }, 1000 / 60)
  },
  addAction: function (action: ActionCallBack) {
    this.actions.push(action)
  },
}

export function useGameStore(
  container: HTMLDivElement | null = null | HTMLDivElement
): GameStateInterface {
  if (container && gameState.container !== container) {
    gameState.container = container as HTMLDivElement
    gameState.container.appendChild(gameState.renderer.domElement)
    gameState.render()
  }

  return gameState
}
