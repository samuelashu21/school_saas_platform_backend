import { Request, Response } from "express";
import { ClassesService } from "./classes.service";
import { RequestContext } from "../../context/requestContext";

export class ClassesController {
  static async create(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await ClassesService.createClass(req.body, ctx);
    res.json(result);
  }

  static async getAll(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await ClassesService.getClasses(ctx);
    res.json(result);
  }

  static async getById(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await ClassesService.getClassById(req.params.id, ctx);
    res.json(result);
  }

  static async assignTeacher(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await ClassesService.assignTeacher(
      req.params.classId,
      req.body.teacherId,
      ctx
    );

    res.json(result);
  }
}