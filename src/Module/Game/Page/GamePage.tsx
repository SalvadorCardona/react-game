import "./GamePage.css"
import { useCallback } from "react"
import { useGameStore } from "@/Module/Game/Application/GameStore.ts"
import mainLevel from "@/Module/Game/Object3d/Level/mainLevel.ts"
import { InterfaceGameComponent } from "@/Module/Game/Page/Component/InterfaceGameComponent.tsx"

export function GamePage() {
  const gameStore = useGameStore()

  const containerRef = useCallback((node) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGameStore(node)
    if (gameStore.scene.children.length) return

    mainLevel(gameStore)
  })

  return (
    <>
      <div ref={containerRef}></div>
      <InterfaceGameComponent gameState={gameStore}></InterfaceGameComponent>
    </>
  )
}
