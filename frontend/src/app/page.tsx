import Link from "next/link"
import { ClipboardIcon, PlusCircleIcon, TrashIcon } from "lucide-react"

import { deleteTask, getTasks } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import Header from "@/components/header"
import TaskCheckbox from "@/components/task-checkbox"

export default async function Home() {
  const tasks = await getTasks()
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <>
      <div className="container relative flex h-[200px] flex-col items-center justify-center bg-background">
        <Header />
        <Link
          href="/create"
          className={cn(
            buttonVariants(),
            "absolute -bottom-14 left-1/2 h-14 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-[#1E6F9F] font-bold text-white hover:bg-[#1E6F9F]/80",
          )}
        >
          Create Task
          <PlusCircleIcon />
        </Link>
      </div>
      <div className="container flex grow flex-col items-center space-y-6 bg-[#1A1A1A] pt-20">
        <div className="flex w-full max-w-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-[#4EA8DE]">Tasks</p>
            <Badge variant="secondary">{tasks.length}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-[#8284FA]">Completed</p>
            <Badge variant="secondary">
              {completedTasks.length} of {tasks.length}
            </Badge>
          </div>
        </div>
        <div className="w-full max-w-2xl pb-4">
          {tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-t border-[#333333] pt-8 text-center">
              <ClipboardIcon className="size-16 text-muted-foreground" />
              <p className="font-semibold text-muted-foreground">
                You don&apos;t have any tasks registered yet.
              </p>
              <p className="text-muted-foreground">
                Create tasks and organize your to-do items.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex justify-between gap-3 rounded-lg bg-[#262626] px-4 hover:bg-[#333333]"
                >
                  <div className="pt-4">
                    <TaskCheckbox id={task.id} completed={task.completed} />
                  </div>
                  <Link
                    href={`/update/${task.id}`}
                    className={cn(
                      "grow py-4",
                      task.completed && "text-muted-foreground line-through",
                    )}
                  >
                    {task.title}
                  </Link>
                  <form action={deleteTask} className="pt-4">
                    <input type="hidden" name="id" value={task.id} />
                    <button className="h-fit">
                      <TrashIcon className="size-6 text-muted-foreground" />
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
