import CoordinableInterface from "@/Module/Shared/Domain/CoordinableInterface.ts"

interface createCoordinableInterface {
  x?: number
  y?: number
  z?: number
}
export default function createCoordinable(
  args: createCoordinableInterface
): CoordinableInterface {
  return {
    ...{
      x: 0,
      y: 0,
      z: 0,
    },
    ...args,
  }
}
