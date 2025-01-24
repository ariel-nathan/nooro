import { Color } from "@prisma/client";
import z from "zod";

export const taskGetSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid ID"),
  }),
});

export const taskCreateSchema = z.object({
  body: z.object(
    {
      title: z.string().min(1, "Title is required."),
      color: z
        .nativeEnum(Color, {
          message: "Invalid color.",
        })
        .optional(),
    },
    {
      message: "Invalid request body.",
    }
  ),
});

export const taskUpdateSchema = z.object({
  body: z.object(
    {
      title: z.string().min(1, "Title is required.").optional(),
      color: z
        .nativeEnum(Color, {
          message: "Invalid color.",
        })
        .optional(),
      completed: z.boolean().optional(),
    },
    {
      message: "Invalid request body.",
    }
  ),
});

export const taskDeleteSchema = z.object({
  params: z.object({
    id: z.string().uuid("Invalid ID"),
  }),
});
