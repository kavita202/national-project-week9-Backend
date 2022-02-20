import express from "express";
import path from "path";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import router from "./routes/questions.js";
import router2 from "./routes/users.js";
const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", router);
app.use("/progress", router2);
app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;

// install helmet
