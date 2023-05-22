import { Object3D } from "three"
import { coinModelUrl } from "@/Module/Game/Object3d/Coin/coinModel.ts"
import { useGameStore } from "@/Module/Game/Application/GameStore.ts"
import playSound from "@/Module/Shared/Application/playSound.ts"
import coinNoiseUrl from "@/Module/Game/Object3d/Coin/coince-noise.wav?url"
import cowNoiseUrl from "@/Module/Game/Object3d/Cow/cow-noise.wav?url"
import { cowModelUrl } from "@/Module/Game/Object3d/Cow/cowModel.ts"

export default function collisionBehavior(
  player: Object3D,
  objectDetected: Object3D
): void {
  if (objectDetected.name === coinModelUrl) {
    objectDetected.visible = false
    objectDetected.removeFromParent()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGameStore().score.coin++
    playSound(coinNoiseUrl)
  }
  if (objectDetected.name === cowModelUrl) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGameStore().score.coin--
    objectDetected.removeFromParent()
    playSound(cowNoiseUrl).then((sound) => {
      sound.duration = 0.5
    })
  }
}
