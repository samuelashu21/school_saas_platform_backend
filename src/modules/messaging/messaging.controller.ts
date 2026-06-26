import { Request, Response } from "express";
import { MessagingService } from "./messaging.service";
import { RequestContext } from "../../context/requestContext";

export class MessagingController {
  static async createThread(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await MessagingService.createThread(req.body, ctx);
    res.json(result);
  }

  static async sendMessage(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await MessagingService.sendMessage(req.body, ctx);
    res.json(result);
  }

  static async getThreads(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await MessagingService.getThreads(ctx);
    res.json(result);
  }

  static async getThread(req: Request, res: Response) {
    const result = await MessagingService.getThread(req.params.id);
    res.json(result);
  }
}