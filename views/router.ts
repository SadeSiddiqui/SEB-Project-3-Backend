import express from "express";
import { getAnimals, getAnimalById, createAnimal } from "../controllers/animalController";
import {signup, login, getCurrentUser} from "../controllers/userController";
import secureRoute from "../middleware/secureRoute";

const router = express.Router();

// Get animals

router.route("/api/animals").get(getAnimals);

// Get an animal

router.route("/api/animals/:animalId").get(getAnimalById);

// Add an animal

router.route("/api/animals").post(secureRoute, createAnimal); 

// // Delete an animal

// router.route("/api/animals/:animalId").delete(secureRoute, deleteAnimal);

// // Update an animal

// router.route("/api/animals/:animalId").put(secureRoute, updateAnimal);

// Sign up

router.route("/api/signup").post(signup);

// Login

router.route("/api/login").post(login);

// // Getting the currentUser

router.route("/api/user").get(secureRoute, getCurrentUser);

// // Add a post

// router.route("/api/posts").post(secureRoute, createPost);

// // Update post

// router.route("/api/posts/:postId").put(secureRoute, updatePost);

// // Delete a post

// router.route("/api/posts/:postId").delete(secureRoute, deletePost);

export default router;
