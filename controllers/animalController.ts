import { Request, Response } from "express";
import Animal from "../models/animals";
import formatValidationError from "../errors/validation";

//Get all animals
export async function getAnimals(req: Request, res: Response) {
  const animals = await Animal.find();
  res.send(animals);
}

//Delete an animal, feature only used by the same member that posted the animal page onto the app  
export async function deleteAnimal(req: Request, res: Response){
    try { 
        const animalToDelete = await Animal.findById(req.body.animalId)
        if (!animalToDelete) {
            return res.send({ message: 'That animal was not found'})
        }
        console.log("currentUserId: ", res.locals.currentUser._id)
        console.log("animal to delete: ", animalToDelete)
        console.log("animalUserId: ", animalToDelete.user)

        if (res.locals.currentUser._id.equals(animalToDelete.user)) {
            const animalId = req.params.animalId
            const deleteAnimal = await Animal.findByIdAndDelete(animalId)
            return res.send(deleteAnimal)
        } else {
            return res.send({ message: "You are authorized to delete this animal page"})
        }
    } catch (e) {
        res.send({ message: "There was a problem deleting your animal page"})
    }
}

export async function updateAnimal(req: Request, res: Response ) {
    try {
        const animalId = req.body.animalId 
        const update = req.body 
        const updateAnimal = await Animal.findByIdAndUpdate(animalId, update, { new: true })
        res.send(updateAnimal)
    } catch (e) {
        res.send({ message: "There was a problem updating your animal page"})
    }
}

// export async function updateAnimal(req: Request, res: Response) {
//   try {
//     const animalId = req.params.animalId;
//     const update = req.body;
//     const updateAnimal = await Animal.findByIdAndUpdate(animalId, update, {
//       new: true,
//     });
//     res.send(updateAnimal);
//   } catch (e) {
//     res.send({ message: "There was a problem updating your animal page" });
//   }
// }
//Get one animal by Id
export async function getAnimalById(req: Request, res: Response) {
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
export async function createAnimal(req: Request, res: Response) {
  try {
    console.log(res.locals.currentUser);
    req.body.user = res.locals.currentUser;
    console.log("Adding", req.body);
    const animal = await Animal.create(req.body);
    res.send(animal);
  } catch (e) {
    res.status(400).send({
      message: "Not a valid document layout",
      errors: formatValidationError(e),
    });
  }
}
