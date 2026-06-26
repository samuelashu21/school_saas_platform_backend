import { Request, Response } from "express";
import { TeachersService } from "./teachers.service";
import { RequestContext } from "../../context/requestContext";

export class TeachersController {
  static async create(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await TeachersService.createTeacher(req.body, ctx);
    res.json(result);
  }

  static async getAll(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await TeachersService.getTeachers(ctx);
    res.json(result);
  }

  static async getById(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await TeachersService.getTeacherById(req.params.id, ctx);
    res.json(result);
  }

  static async assignClass(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await TeachersService.assignClass(
      req.params.teacherId,
      req.body.classId,
      ctx
    );

    res.json(result);
  }
}