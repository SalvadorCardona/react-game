import musicUrl from "./Asset/game-music.mp3?url"
import {
  AudioLoader,
  Audio as ThreeAudio,
  AudioListener as ThreeAudioListener,
} from "three"
import { useGameStore } from "@/Module/Game/Application/GameStore.ts"

export default function playSound(soundUrl: string): Promise<ThreeAudio> {
  const listener = new ThreeAudioListener()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGameStore().camera.add(listener)
  const sound = new ThreeAudio(listener)

  const audioLoader = new AudioLoader()
  return new Promise((resolve) => {
    audioLoader.load(soundUrl, function (buffer) {
      sound.setBuffer(buffer)
      sound.setVolume(0.5)
      sound.play()
      resolve(sound)
    })
  })
}
