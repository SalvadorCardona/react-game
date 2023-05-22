import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import CoordinableInterface from "@/Module/Shared/Domain/CoordinableInterface.ts"
import createCoin from "@/Module/Game/Object3d/Coin/createCoin.ts"
import createCow from "@/Module/Game/Object3d/Cow/createCow.ts"
import isPair from "@/Module/Shared/Domain/isPair.ts"
import mainLevelConfiguration from "@/Module/Game/Object3d/Level/mainLevelConfiguration.ts"

export default function generateCoins(gameState: GameStateInterface): void {
  const distanceBeetwenCoins = 4
  const distanceBeetwenSeveralCoin = 30
  const totalCoins = distanceBeetwenCoins * 200
  const totalCoinByLigne = distanceBeetwenCoins * 5

  let currentPositionX = 0
  for (let i = 0; i < totalCoins; i = i + distanceBeetwenSeveralCoin) {
    for (let j = 0; j < totalCoinByLigne; j = j + distanceBeetwenCoins) {
      const position = {
        x: currentPositionX * 3,
        y: 0,
        z: -(i + j),
      }
      createCoin(gameState, position)
    }
    const position = {
      x: currentPositionX * 3,
      y: 0,
      z: -i + 10,
    }
    createCow(gameState, position)

    currentPositionX++
    if (currentPositionX === 5) currentPositionX = 0
  }
}
