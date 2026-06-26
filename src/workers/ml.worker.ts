import { Worker } from "bullmq";
import { redis } from "../config/redis";
import axios from "axios";

new Worker(
  "ml-jobs",
  async job => {
    const { studentId, schoolId } = job.data;

    const result = await axios.post("http://ml-service:8000/predict", {
      studentId,
      schoolId
    });

    console.log("ML Result:", result.data);
  },
  { connection: redis }
);