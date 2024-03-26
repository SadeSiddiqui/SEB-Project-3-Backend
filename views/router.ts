import express from "express";
import {
  getAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from "../controllers/animalController";
import { signup, login, getCurrentUser } from "../controllers/userController";
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/commentController";
import secureRoute from "../middleware/secureRoute";

const router = express.Router();

// Get animals

router.route("/api/animals").get(getAnimals); // Route works in backend check 

// Get an animal

router.route("/api/animals/:animalId").get(getAnimalById); // Route works in backend check 

// Add an animal

router.route("/api/animals").post(secureRoute, createAnimal); // Route works in backend check curretly works for an existing user adding a new animal 

// Delete an animal

router.route("/api/animals/:animalId").delete(secureRoute, deleteAnimal); // Tokin is Valid after current check in insomnia and console logs

// Update an animal

router.route("/api/animals/:animalId").put(secureRoute, updateAnimal);

// Sign up

router.route("/api/signup").post(signup);

// Login

router.route("/api/login").post(login);

// Getting the currentUser

router.route("/api/user").get(secureRoute, getCurrentUser);

// get all posts

router.route("/api/:animalId/posts").get(getPost)

// Add a post

router.route("/api/:animalId/posts").post(secureRoute, createPost);

// Update post

router.route("/api/posts/:postId").put(secureRoute, updatePost);

// Delete a post

router.route("/api/posts/:postId").delete(secureRoute, deletePost);

export default router;
