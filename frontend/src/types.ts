export enum Color {
  BLACK = "BLACK",
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  PURPLE = "PURPLE",
  ORANGE = "ORANGE",
}

export const COLORS = Object.values(Color)

export type Task = {
  id: string
  title: string
  color: Color
  completed: boolean
  createdAt: string
  updatedAt: string
}

export type TaskResponse = Task[]
