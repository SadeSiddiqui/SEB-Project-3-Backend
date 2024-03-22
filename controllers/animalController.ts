import { Request, Response } from "express";
import Animal from "../models/animals"
import formatValidationError from "../errors/validation";


//Get all animals
export async function getAnimals(req:Request, res: Response) {
    const animals = await Animal.find();
    res.send(animals)
    
}

//Get one animal by Id
export async function getAnimalById(req:Request, res:Response){
    const animalId = req.params.animalId; 
  console.log(animalId); 
  try {
    const foundAnimal = await Animal.findById(animalId); 
    res.send(foundAnimal);
  } catch (e) {
    res.send({
      message: "Animal not found. Have you povided a valid ID?",
    });
  }
}

//Create an animal
export async function createAnimal(req:Request, res:Response){
try {
    req.body.user = res.locals.currentUser;
    console.log("Adding", req.body);
    const animal = await Animal.create(req.body);
    res.send(animal);
} catch (e) {
    res.status(400).send({
      message:
        "Not a valid document layout",
      errors: formatValidationError(e),
    });

}
}