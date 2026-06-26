import { Queue } from "bullmq";
import { redis } from "../config/redis";

export const mlQueue = new Queue("ml-jobs", {
  connection: redis
});

export const emailQueue = new Queue("email-jobs", {
  connection: redis
});