import { Request, Response } from "express";
import { PredictionsService } from "./predictions.service";
import { RequestContext } from "../../context/requestContext";

export class PredictionsController {
  static async getStudent(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await PredictionsService.getStudentPrediction(
      req.params.studentId,
      ctx.schoolId
    );

    res.json(result);
  }

  static async history(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await PredictionsService.getStudentHistory(
      req.params.studentId,
      ctx.schoolId
    );

    res.json(result);
  }

  static async atRisk(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await PredictionsService.getAtRiskStudents(ctx.schoolId);

    res.json(result);
  }
}