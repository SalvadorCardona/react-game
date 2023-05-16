import { CameraComponent } from "@/Module/Game/Component/CameraComponent.tsx"
import { GroundComponent } from "@/Module/Game/Component/GroundComponent.tsx"
import { OctoComponent } from "@/Module/Game/Component/Octo/OctoComponent.tsx"
import { Canvas } from "@react-three/fiber"
import { AmbientComponent } from "@/Module/Game/Component/AmbientComponent.tsx"
import "./GamePage.css"
import { useGameStore } from "@/Module/Game/Application/GameStore.ts"
import { Coin, CoinRef } from "@/Module/Game/Component/Coin/Coin.tsx"
import { createElement, forwardRef, useEffect, useRef, useState } from "react"
import { Group } from "three"
import CameraBehavior from "@/Module/Game/Domain/CameraBehavior.ts"

export function GamePage() {
  const gameStore = useGameStore()
  const ref = useRef<Group>()
  let base = -15
  const [position, setPosition] = useState([1, 1, base])
  const Camera = createElement(CameraComponent)
  const Player = createElement(OctoComponent)
  useEffect(() => {
    setInterval(() => {
      CameraBehavior(Camera, Player)
    }, 1 / 60)
  }, [ref.current])

  return (
    <>
      <Canvas flat shadows>
        <CoinRef position={position} ref={ref}></CoinRef>
        {Camera}
        {Player}
        <GroundComponent />
        <AmbientComponent />
      </Canvas>
    </>
  )
}
