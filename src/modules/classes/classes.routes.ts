import { Router } from "express";
import { ClassesController } from "./classes.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const classesRoutes = Router();

classesRoutes.post("/", rbac("SCHOOL_ADMIN"), ClassesController.create);

classesRoutes.get("/", rbac("SCHOOL_ADMIN", "TEACHER"), ClassesController.getAll);

classesRoutes.get("/:id", rbac("SCHOOL_ADMIN", "TEACHER"), ClassesController.getById);

classesRoutes.post(
  "/:classId/assign-teacher",
  rbac("SCHOOL_ADMIN"),
  ClassesController.assignTeacher
);