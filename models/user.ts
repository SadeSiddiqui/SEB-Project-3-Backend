import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import validator from "validator";
import mongooseHidden from "mongoose-hidden";
import bcrypt from "bcrypt";

//Interface for User

interface IUser {
  username: string;
  email: string;
  password: string;
}

//Schema for User

const userSchema: Schema<IUser> = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (email: string) => validator.isEmail(email),
  },
  password: {
    type: String,
    required: true,
    validate: (password: string) => {
      return validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      });
    },
  },
});

//Signup-Hashing password

userSchema.pre("save", function hashPassword(next) {
  console.log("here is the password ", this.password);
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
  console.log("here is the updated password ", this.password);
  next();
});

//Login-Validating and Comparing passwords

export function validatePassword(
  loginPlaintextPassword: string,
  originalHashedPassword: string
) {
  return bcrypt.compareSync(loginPlaintextPassword, originalHashedPassword);
}
export function checkPasswords(password: string, passwordConfirmation: string) {
  return password == passwordConfirmation;
}

//hiding password confirmation 
userSchema.plugin(mongooseHidden({ defaultHidden: { password: true } }));

//
userSchema.plugin(uniqueValidator);

export default mongoose.model<IUser>("User", userSchema);