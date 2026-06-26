import { Router } from "express";
import { TeachersController } from "./teachers.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const teachersRoutes = Router();

teachersRoutes.post("/", rbac("SCHOOL_ADMIN"), TeachersController.create);

teachersRoutes.get("/", rbac("SCHOOL_ADMIN", "TEACHER"), TeachersController.getAll);

teachersRoutes.get("/:id", rbac("SCHOOL_ADMIN", "TEACHER"), TeachersController.getById);

// assign teacher to class
teachersRoutes.post(
  "/:teacherId/assign-class",
  rbac("SCHOOL_ADMIN"),
  TeachersController.assignClass
);