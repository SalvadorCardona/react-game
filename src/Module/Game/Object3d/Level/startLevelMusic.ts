import musicUrl from "./Asset/game-music.mp3?url"
import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import playSound from "@/Module/Shared/Application/playSound.ts"

export default function startLevelMusic(gameStore: GameStateInterface): void {
  playSound(musicUrl).then((sound) => {
    sound.setLoop(true)
  })
}
