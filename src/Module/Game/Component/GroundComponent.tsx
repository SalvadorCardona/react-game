export function GroundComponent() {
  return (
    <mesh receiveShadow rotation-x={Math.PI / -2}>
      <planeGeometry args={[200, 200, 200]} />
      <meshStandardMaterial color="#F0EC80" />
    </mesh>
  )
}
