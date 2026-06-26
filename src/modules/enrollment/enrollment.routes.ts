import { Router } from "express";
import { EnrollmentController } from "./enrollment.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const enrollmentRoutes = Router();

enrollmentRoutes.post(
  "/enroll",
  rbac("SCHOOL_ADMIN", "TEACHER"),
  EnrollmentController.enroll
);

enrollmentRoutes.get(
  "/class/:classId",
  rbac("SCHOOL_ADMIN", "TEACHER"),
  EnrollmentController.getClassStudents
);

enrollmentRoutes.get(
  "/student/:studentId",
  rbac("SCHOOL_ADMIN", "TEACHER"),
  EnrollmentController.getStudentClasses
);

enrollmentRoutes.delete(
  "/unenroll",
  rbac("SCHOOL_ADMIN"),
  EnrollmentController.unenroll
);