import { Request, Response } from "express";
import Animal from "../models/animals"


//Get all animals
export async function getAnimals(req:Request, res: Response) {
    const animals = await Animal.find();
    res.send(animals)
    
}