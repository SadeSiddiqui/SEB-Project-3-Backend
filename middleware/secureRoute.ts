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
    return res.status(401).json({ message: "Unauthorized" });
  }

  // create token without 'Bearer'
  const token = rawToken.replace("Bearer ", "");
}
