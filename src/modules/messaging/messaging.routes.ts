import { Router } from "express";
import { MessagingController } from "./messaging.controller";
import { rbac } from "../../middlewares/rbac.middleware";

export const messagingRoutes = Router();

messagingRoutes.post(
  "/thread",
  rbac("TEACHER", "SCHOOL_ADMIN"),
  MessagingController.createThread
);

messagingRoutes.post(
  "/send",
  rbac("TEACHER", "STUDENT", "PARENT", "SCHOOL_ADMIN"),
  MessagingController.sendMessage
);

messagingRoutes.get(
  "/threads",
  rbac("TEACHER", "STUDENT", "PARENT", "SCHOOL_ADMIN"),
  MessagingController.getThreads
);

messagingRoutes.get(
  "/thread/:id",
  rbac("TEACHER", "STUDENT", "PARENT", "SCHOOL_ADMIN"),
  MessagingController.getThread
);