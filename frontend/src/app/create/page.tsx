import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import Header from "@/components/header"
import TaskForm from "@/components/task-form"

export default function CreatePage() {
  return (
    <>
      <div className="container relative flex h-[200px] flex-col items-center justify-center bg-background">
        <Header />
      </div>
      <div className="container flex grow flex-col items-center space-y-6 bg-[#1A1A1A] pb-4 pt-20">
        <div className="w-full max-w-2xl space-y-8">
          <Link href="/">
            <ArrowLeftIcon className="size-6" />
          </Link>
          <TaskForm />
        </div>
      </div>
    </>
  )
}
