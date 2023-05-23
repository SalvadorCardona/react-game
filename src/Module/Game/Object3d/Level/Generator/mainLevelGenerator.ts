import { GameStateInterface } from "@/Module/Game/Application/GameStore.ts"
import createCoin from "@/Module/Game/Object3d/Coin/createCoin.ts"
import createCow from "@/Module/Game/Object3d/Cow/createCow.ts"
import createFinishLine from "@/Module/Game/Object3d/FinishLine/createFinishLine.ts"
import createHouse from "@/Module/Game/Object3d/House/createHouse.ts"

export default function mainLevelGenerator(gameState: GameStateInterface): void {
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

    if (i === 780) {
      const position = {
        x: 0,
        y: 0,
        z: -i + -30,
      }

      createFinishLine(gameState, position)
    }
  }
  let left = true
  for (let i = 0; i < 800; i = i + 100) {
    const position = {
      x: left ? -20 : 20,
      y: 18,
      z: -i,
    }
    createHouse(gameState, position)
    left = !left
  }
}
