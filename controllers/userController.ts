import { checkPasswords, validatePassword } from "../models/user"
import { Request, Response } from "express"
import User, { } from "../models/user"
import formatValidationError from "../errors/validation"

// Signup a new member
export async function signup(req: Request, res: Response) {
    try {
        console.log(req.body)
        if (checkPasswords(req.body.password, req.body.passwordConfirmation)) {
            const user = await User.create(req.body)
            res.send(user)
        } else {
            res.status(400).send({ message: "Passwords to not match, Try again", errors: { password: "Does not match password, Try again"}})

        }
     // This requries the export from error - validation and the import of formatValidtor, its an added feature 
    } catch (e) {
        console.log(e)
        res.status(400).send({ message: "There was an error", errors: formatValidationError(e)})
    }
}