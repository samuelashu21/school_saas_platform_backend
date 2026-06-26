import { Router } from "express";
import { SchoolController } from "./schools.controller";

 
export const schoolRoutes = Router();

// Create school
schoolRoutes.post("/", SchoolController.create);
 
// Get all schools
schoolRoutes.get("/", SchoolController.getAll);

export default schoolRoutes;