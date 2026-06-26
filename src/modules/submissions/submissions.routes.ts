import { Router } from "express";
import { SubmissionsController } from "./submissions.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const submissionsRoutes = Router();

submissionsRoutes.post(
  "/",
  rbac("STUDENT"),
  SubmissionsController.submit
);

submissionsRoutes.get(
  "/assignment/:assignmentId",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  SubmissionsController.getByAssignment
);

submissionsRoutes.get(
  "/student/:studentId",
  rbac("STUDENT", "TEACHER"),
  SubmissionsController.getByStudent
);