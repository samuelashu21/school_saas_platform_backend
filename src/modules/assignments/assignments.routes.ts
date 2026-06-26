import { Router } from "express";
import { AssignmentsController } from "./assignments.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const assignmentsRoutes = Router();

assignmentsRoutes.post(
  "/",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  AssignmentsController.create
);

assignmentsRoutes.get(
  "/class/:classId",
  rbac("TEACHER", "STUDENT", "SCHOOL_ADMIN"),
  AssignmentsController.getClass
);

assignmentsRoutes.get(
  "/:id",
  rbac("TEACHER", "STUDENT", "SCHOOL_ADMIN"),
  AssignmentsController.getOne
);