"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { env } from "@/env"
import { Task, TaskResponse } from "@/types"
import { z } from "zod"

import { formSchema } from "@/components/task-form"

export async function getTasks() {
  const res = await fetch(env.API_URL + "/tasks")
  return (await res.json()) as TaskResponse
}

export async function createTask(values: z.infer<typeof formSchema>) {
  await fetch(env.API_URL + "/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  revalidatePath("/")
  redirect("/")
}

export async function toggleCompleted(id: string, completed: boolean) {
  await fetch(env.API_URL + "/tasks/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  })
  revalidatePath("/")
}

export async function deleteTask(formData: FormData) {
  const id = formData.get("id")
  await fetch(env.API_URL + "/tasks/" + id, {
    method: "DELETE",
  })
  revalidatePath("/")
}

export async function getTask(id: string) {
  const res = await fetch(env.API_URL + "/tasks/" + id)
  return (await res.json()) as Task
}

export async function updateTask(
  id: string,
  values: z.infer<typeof formSchema>,
) {
  await fetch(env.API_URL + "/tasks/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  revalidatePath("/")
  redirect("/")
}
