import { Request, Response } from "express";
import User, { checkPasswords, validatePassword } from "../models/user";
import { SECRET } from "../config/env";
import jwt from "jsonwebtoken";

import formatValidationError from "../errors/validation";

// Signup a new member
export async function signup(req: Request, res: Response) {
  try {
    console.log(req.body);
    if (checkPasswords(req.body.password, req.body.passwordConfirmation)) {
      const user = await User.create(req.body);
      res.send(user);
    } else {
      res.status(400).send({
        message: "Passwords to not match, Try again",
        errors: { password: "Does not match password, Try again" },
      });
    }
    // This requries the export from error - validation and the import of formatValidtor, its an added feature
  } catch (e) {
    console.log(e);
    res.status(400).send({
      message: "There was an error",
      errors: formatValidationError(e),
    });
  }
}

//  LOGIN
export async function login(req: Request, res: Response) {
  try {
    console.log(req.body);

    // Get the user password - does it match?
    const password = req.body.password;

    // Get the user email - if doesn't match return a status error
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: "Login failed" });

    // Check whether password is valid
    const isValidPassword = validatePassword(password, user.password);
    if (isValidPassword) {
      // Create user token and encode userId on token as userId
      const token = jwt.sign({ userId: user._id }, SECRET, {
        expiresIn: "24h",
      });
      // If password is valid send message and token
      res.send({ message: "Login successful", token });
    }
    // if not valid send status error failed login
    else {
      res.status(401).send({message: "Login failed", errors: {message: "Login failed"}});
    }
    res.send(req.body);
  } catch (e) {}
}
// Function to get ALL the user information of the currentUser

export async function getCurrentUser(req: Request, res: Response) {
  try {
    res.status(200).send(res.locals.currentUser);
    console.log(res.locals.currentUser);
  } catch (e) {
    res.status(500).send({ message: "Oh no, an error please try again later" });
  }
}
