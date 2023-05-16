import { OctoModel } from "@/Module/Game/Component/Octo/Octo.tsx"
import { useEffect, useRef, useState } from "react"
import { Group, Vector3 } from "three"
import CoordinableInterface from "@/Module/Shared/Domaine/CoordinableInterface.ts"
import { useFrame, useThree } from "@react-three/fiber"

export function OctoComponent() {
  new Vector3(0, 1, -5)
  const position = new Vector3(0, 1, -5)

  const { viewport } = useThree()
  const ref = useRef<Group>(null)

  useEffect(() => {
    addEventListener("keydown", (event) => {
      if (event.key === "ArrowUp") {
        position.z -= 0.1
      }
      if (event.key === "ArrowDown") {
        position.z += 0.1
      }
      if (event.key === "ArrowLeft") {
        position.x -= 0.1
      }
      if (event.key === "ArrowRight") {
        position.x += 0.1
      }
      ref.current.position.set(position.x, position.y, position.z)
    })
  }, [])

  useFrame(({ clock }) => {
    if (!ref.current) {
      return
    }

    position.z -= 0.1
    ref.current.position.set(position.x, position.y, position.z)
  })

  return (
    <>
      <OctoModel
        ref={ref}
        position-z={position.z}
        position-y={position.y}
        position-x={position.x}
        scale={0.25}
      />
    </>
  )
}
