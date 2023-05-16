import { create } from "zustand"
import { Group } from "three"

interface Future {}
interface GameState {
  gameObject: Group[]
  player: Group
  add: (item: Group) => void
  remove: (item: Group) => void
  update: (item: Group) => void
}

export const useGameStore = create<GameState>((set, getState) => ({
  gameObject: [],
  add: (item: Future) => {},
  remove: (item: Future) => {},
  update: (item: Future) => {},
}))
