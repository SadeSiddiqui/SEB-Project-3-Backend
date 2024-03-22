import mongoose from "mongoose";
import User from "../models/user";
import Animal from "../models/animals";

// Adding an admin user

const adminUser = [
  {
    username: "bert",
    email: "bert@bert.com",
    password: "Bertanimal12!",
  },
];

const animalData = [
  {
    name: "Lion",
    species: "P.Leo",
    image: "this is an image",
    type: "Safari",
    topTip: "Don't feed them by hand",
    dietary: "Carnivore",
    continent: "Africa",
    funFact: "Male lions can weight up to 30stone",
    conservation: "Vulnerable",
  },
  {
    name: "Pumpkin",
    species: "Pumpkin",
    image: "image",
    type: "Wild",
    topTip: "feed them by hand",
    dietary: "Omnivore",
    continent: "Austrlia",
    funFact: "Male lions can weigh",
    conservation: "Least concerned",
  },
];

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/animalsdb");
  console.log("Connected to the database! 🔥");

  await mongoose.connection.db.dropDatabase();
  console.log("Remove existing data.");

  // ! Before we seed movies, we want to seed a user.
  const users = await User.create(adminUser);
  const user = users[0];
  // ! Add the user to each movie. Now each movie has a user.
  animalData.forEach((animal: any) => (animal.user = user));
  console.log(animalData);

  const animals = await Animal.create(animalData);
  console.log("Here are the animals:");
  console.log(animals);

  console.log("Disconnecting 🤖..");
  await mongoose.disconnect();
}

seed();
