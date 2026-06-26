import { Router } from "express";
import { StudentsController } from "./students.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const studentsRoutes = Router();

studentsRoutes.post("/", rbac("SCHOOL_ADMIN", "TEACHER"), StudentsController.create);

studentsRoutes.get("/", rbac("SCHOOL_ADMIN", "TEACHER"), StudentsController.getAll);

studentsRoutes.get("/:id", rbac("SCHOOL_ADMIN", "TEACHER"), StudentsController.getById);