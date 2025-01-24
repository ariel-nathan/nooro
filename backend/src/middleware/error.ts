import { Prisma } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error | Prisma.PrismaClientKnownRequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error." });
  }
};
