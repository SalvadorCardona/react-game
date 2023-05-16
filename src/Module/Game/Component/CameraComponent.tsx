import { PerspectiveCamera } from "@react-three/drei"
import { Camera, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Vector3 } from "three"
export function CameraComponent() {
  const ref = useRef<Camera>(null)

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return
    }

    ref.current.lookAt(new Vector3(0, ref.current.position.y, -1))
    // ref.current.position.x = mouse.x * 0.5
    // ref.current.position.z -= 0.1
  })

  return <PerspectiveCamera ref={ref} fov={50} position={[0, 3, 3]} makeDefault />
}
