// if we are not in production - i.e in development

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import router from "./routes/questions.js";
import flash from "express-flash";
import session from "express-session";
import passport from "passport";
const app = express();
// allows us to use ejs in our template

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view-engine", "ejs");
app.use("/", router);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

app.use(express.urlencoded({ extended: false }));

export default app;
