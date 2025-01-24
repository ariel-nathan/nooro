import { Color, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  await prisma.task.createMany({
    data: [
      { title: "Task 1", color: Color.RED },
      { title: "Task 2", color: Color.BLUE },
      { title: "Task 3", color: Color.GREEN },
      { title: "Task 4", color: Color.YELLOW },
      { title: "Task 5", color: Color.PURPLE },
      { title: "Task 6", color: Color.ORANGE },
      { title: "Task 7", color: Color.BLACK },
    ],
  });
  console.log("Database seeded successfully");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
