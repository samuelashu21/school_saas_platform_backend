import { Request, Response } from "express";
import { SubmissionsService } from "./submissions.service";
import { RequestContext } from "../../context/requestContext";

export class SubmissionsController {
  static async submit(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await SubmissionsService.submit(req.body, ctx);
    res.json(result);
  }

  static async getByAssignment(req: Request, res: Response) {
    const result = await SubmissionsService.getByAssignment(req.params.assignmentId);
    res.json(result);
  }

  static async getByStudent(req: Request, res: Response) {
    const result = await SubmissionsService.getByStudent(req.params.studentId);
    res.json(result);
  }
}