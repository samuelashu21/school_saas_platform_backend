import { Router } from "express";
import { AnalyticsController } from "./analytics.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const analyticsRoutes = Router();

analyticsRoutes.get(
  "/student/:studentId",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  AnalyticsController.getStudent
);