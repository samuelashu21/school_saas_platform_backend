import { Request, Response } from "express";
import { GradebookService } from "./gradebook.service";
import { RequestContext } from "../../context/requestContext";

export class GradebookController {
  static async assign(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await GradebookService.assignGrade(req.body, ctx);
    res.json(result);
  }

  static async getClass(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await GradebookService.getClassGrades(req.params.classId, ctx);
    res.json(result);
  }

  static async getStudent(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await GradebookService.getStudentGrades(req.params.studentId, ctx);
    res.json(result);
  }

  static async update(req: Request, res: Response) {
    const result = await GradebookService.updateGrade(
      req.params.id,
      req.body
    );
    res.json(result);
  }
}