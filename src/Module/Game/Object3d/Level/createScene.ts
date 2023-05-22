import { Color, PMREMGenerator, Renderer, Scene } from "three"
import { RoomEnvironment } from "three-stdlib"

export default function createScene(renderer: Renderer): Scene {
  const scene = new Scene()
  const pmremGenerator = new PMREMGenerator(renderer)
  scene.background = new Color(0xbfe3dd)
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture

  return scene
}
