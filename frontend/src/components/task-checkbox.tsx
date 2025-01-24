"use client"

import { toggleCompleted } from "@/lib/actions"

import { Checkbox } from "./ui/checkbox"

export default function TaskCheckbox({
  id,
  completed,
}: {
  id: string
  completed: boolean
}) {
  return (
    <Checkbox
      checked={completed}
      className="size-4 rounded-full border-[#4EA8DE] data-[state=checked]:border-[#5E60CE] data-[state=checked]:bg-[#5E60CE] data-[state=checked]:text-white"
      onCheckedChange={async () => await toggleCompleted(id, !completed)}
    />
  )
}
