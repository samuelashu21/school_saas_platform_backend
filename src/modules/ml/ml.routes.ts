import { Router } from "express";
import { MLController } from "./ml.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const mlRoutes = Router();

mlRoutes.get(
  "/student-risk/:studentId", 
  rbac("TEACHER", "SCHOOL_ADMIN"),
  MLController.predictRisk
);