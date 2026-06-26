import express from "express";
import cors from "cors";
  
import { authRoutes } from "./modules/auth/auth.routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import { tenantMiddleware } from "./middlewares/tenant.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";
import { schoolRoutes } from "./modules/schools/schools.routes";
import { studentsRoutes } from "./modules/students/students.routes";
import { teachersRoutes } from "./modules/teachers/teachers.routes";
import { classesRoutes } from "./modules/classes/classes.routes";
import { enrollmentRoutes } from "./modules/enrollment/enrollment.routes";
import { attendanceRoutes } from "./modules/attendance/attendance.routes";
import { assignmentsRoutes } from "./modules/assignments/assignments.routes";
import { submissionsRoutes } from "./modules/submissions/submissions.routes";
import { gradebookRoutes } from "./modules/gradebook/gradebook.routes";
import { messagingRoutes } from "./modules/messaging/messaging.routes";
import { analyticsRoutes } from "./modules/analytics/analytics.routes";
import { predictionsRoutes } from "./modules/predictions/predictions.routes";
import { mlRoutes } from "./modules/ml/ml.routes";
import { upload } from "./middlewares/upload.middleware";
import { apiLimiter } from "./middlewares/rateLimit.middleware";

 


export const app = express();

app.use(cors());
app.use(express.json());

app.use(upload.single("file"));

app.use(apiLimiter);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.use(errorMiddleware);

// PUBLIC ROUTES
app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/schools", schoolRoutes);
app.use("/api/v1/students", studentsRoutes); 

app.use("/api/v1/teachers", teachersRoutes);
app.use("/api/v1/classes", classesRoutes);
app.use("/api/v1/enrollment", enrollmentRoutes);

app.use("/api/v1/attendance", attendanceRoutes);

app.use("/api/v1/assignments", assignmentsRoutes); 
app.use("/api/v1/submissions", submissionsRoutes);
app.use("/api/v1/gradebook", gradebookRoutes);
app.use("/api/v1/messaging", messagingRoutes);
app.use("/api/v1/analytics", analyticsRoutes);
app.use("/api/v1/predictions", predictionsRoutes);
app.use("/api/v1/ml", mlRoutes);


// PROTECTED PIPELINE (GLOBAL SAFETY LAYER)
app.use(authMiddleware);
app.use(tenantMiddleware);

// future protected modules go below this line
// app.use("/api/v1/students", studentRoutes);

app.use(errorMiddleware);