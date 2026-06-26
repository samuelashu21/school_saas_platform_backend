import { Router } from "express";
import { PredictionsController } from "./predictions.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const predictionsRoutes = Router();

predictionsRoutes.get(
  "/student/:studentId",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  PredictionsController.getStudent
);

predictionsRoutes.get(
  "/student/:studentId/history",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  PredictionsController.history
);

predictionsRoutes.get(
  "/at-risk",
  rbac("SCHOOL_ADMIN"),
  PredictionsController.atRisk
);