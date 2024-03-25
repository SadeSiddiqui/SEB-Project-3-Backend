import { NextFunction, Request, Response } from "express";
import { SECRET } from "../config/env";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";

// Build a function that only runs when the user is logged in - only specific to particular routes

export default function secureRoute(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // get token from headers.authorization
  const rawToken = req.headers.authorization;

  // if no token send unauthorised
  if (!rawToken) {
    return res.status(401).json({ message: "maybe Unauthorized" });
  }

  // create token without 'Bearer'
  const token = rawToken.replace("Bearer ", "");
  // Verify the token using the SECRET key, if verified execute call back function
  jwt.verify(token, SECRET, async (err, payload) => {
    console.log("Verifying token");

    // if error or payload (decoded info from token) is empty send unauthorised
    if (err || !payload) {
      return res.status(401).json({ message: "Unauthorised is it" });
    }
    console.log("Token Valid!");

    // Specify that the payload should contain the userId as a string
    interface JWTPayload {
      userId: string;
    }
    // payload should have a structure like JWTPayload
    const jwtPayload = payload as JWTPayload;

    // Get the userId from the jwtPayload
    const userId = jwtPayload.userId;

    // Look for a user in the database using the userId taken from the JWT payload
    const user = await User.findById(userId);

    // If no user found send unauthorised
    if (!user) return res.status(401).json({ message: "is it Unauthorised" });

    // if user found attach the found user object to the res.locals object
    res.locals.currentUser = user;
    next();
  });
}
