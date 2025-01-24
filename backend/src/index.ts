import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/error";
import { v1 } from "./v1";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Tasks API");
});

app.use("/v1", v1);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Tasks API listening on port ${port}...`);
});
