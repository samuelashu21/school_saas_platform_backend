import express from "express";
import cors from "cors";

import { authRoutes } from "./modules/auth/auth.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

export const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// API routes
app.use("/api/v1/auth", authRoutes);

// error handler
app.use(errorMiddleware);