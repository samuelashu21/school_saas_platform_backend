import { Router } from "express";
import { GradebookController } from "./gradebook.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const gradebookRoutes = Router();

gradebookRoutes.post(
  "/",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  GradebookController.assign
);

gradebookRoutes.get(
  "/class/:classId",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  GradebookController.getClass
);

gradebookRoutes.get(
  "/student/:studentId",
  rbac("STUDENT", "TEACHER"),
  GradebookController.getStudent
);

gradebookRoutes.put(
  "/:id",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  GradebookController.update
);