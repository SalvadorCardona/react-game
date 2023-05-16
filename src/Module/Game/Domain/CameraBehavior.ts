import { Group } from "three"

export default function CameraBehavior(camera: Group, player: Group): void {
  debugger
  camera.position.set(player.position.x, player.position.y, player.position.z + 5)
}
