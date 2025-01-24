"use client"

import { Color, COLORS, Task } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckIcon, PlusCircleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { createTask, updateTask } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  color: z.nativeEnum(Color),
})

export default function TaskForm({ initialValues }: { initialValues?: Task }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialValues?.title || "",
      color: initialValues?.color || Color.BLACK,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (initialValues) {
      await updateTask(initialValues.id, values)
    } else {
      await createTask(values)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-[#4EA8DE]">Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-bold text-[#4EA8DE]">Color</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center gap-2"
                >
                  {COLORS.map((color) => (
                    <FormItem key={color}>
                      <FormControl>
                        <RadioGroupItem
                          aria-label={color}
                          value={color}
                          className={cn(
                            "size-12",
                            field.value === color ? "border" : "border-none",
                            {
                              "bg-black": color === Color.BLACK,
                              "bg-red-500": color === Color.RED,
                              "bg-green-500": color === Color.GREEN,
                              "bg-yellow-500": color === Color.YELLOW,
                              "bg-purple-500": color === Color.PURPLE,
                              "bg-orange-500": color === Color.ORANGE,
                              "bg-blue-500": color === Color.BLUE,
                            },
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="h-12 w-full bg-[#1E6F9F] font-bold text-white hover:bg-[#1E6F9F]/80"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {form.formState.isSubmitting || !form.formState.isValid ? (
            <>
              Add Task
              <PlusCircleIcon className="size-4" />
            </>
          ) : (
            <>
              Save
              <CheckIcon className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
