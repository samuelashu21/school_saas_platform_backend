import { Request, Response } from "express";
import { StudentsService } from "./students.service";
import { RequestContext } from "../../context/requestContext";

export class StudentsController {
  static async create(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await StudentsService.createStudent(req.body, ctx);
    res.json(result);
  }

  static async getAll(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await StudentsService.getStudents(ctx);
    res.json(result);
  }

  static async getById(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await StudentsService.getStudentById(req.params.id, ctx);
    res.json(result);
  }
}