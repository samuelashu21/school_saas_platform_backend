import { Router } from "express";
import { AttendanceController } from "./attendance.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const attendanceRoutes = Router();

attendanceRoutes.post(
  "/mark",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  AttendanceController.mark
);

attendanceRoutes.get(
  "/class/:classId",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  AttendanceController.getClass
);

attendanceRoutes.get(
  "/student/:studentId",
  rbac("TEACHER", "SCHOOL_ADMIN", "STUDENT"),
  AttendanceController.getStudent
);