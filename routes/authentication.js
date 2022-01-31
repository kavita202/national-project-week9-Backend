import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import { addUser } from "../models/authentication";
import passport from "passport";
import initializePassport from "../passport-config.js";
// import getUserUsingEmail from "../models/authentication.js";
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];
// export into a different file

router.get("/", (req, res) => {
  res.render("index.ejs", { name: "kyle" });
});

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

router.get("/register", (req, res) => {
  res.render("register.ejs");
  console.log(false);
});

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await addUser(req.body.name, hashedPassword, req.body.email);
    res.status(201).send();
    res.redirect("./login");
    console.log(user);
  } catch {
    res.redirect("./register");
  }
});

export default router;
