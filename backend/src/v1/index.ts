import { Router } from "express";
import { db } from "../db";
import { validate } from "../middleware/validate";
import {
  taskCreateSchema,
  taskDeleteSchema,
  taskGetSchema,
  taskUpdateSchema,
} from "../schema";

export const v1 = Router();

v1.get("/tasks", async (req, res) => {
  const tasks = await db.task.findMany({
    orderBy: {
      completed: "asc",
    },
  });
  res.json(tasks);
});

v1.get("/tasks/:id", validate(taskGetSchema), async (req, res) => {
  const task = await db.task.findUnique({
    where: { id: req.params.id },
  });
  res.json(task);
});

v1.post("/tasks", validate(taskCreateSchema), async (req, res) => {
  const task = await db.task.create({
    data: req.body,
  });
  res.json(task);
});

v1.put("/tasks/:id", validate(taskUpdateSchema), async (req, res) => {
  const task = await db.task.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json(task);
});

v1.delete("/tasks/:id", validate(taskDeleteSchema), async (req, res) => {
  await db.task.delete({
    where: { id: req.params.id },
  });
  res.status(204).send("Task deleted successfully.");
});
