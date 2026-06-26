import { Request, Response } from "express";
import { AnalyticsService } from "./analytics.service";
import { RequestContext } from "../../context/requestContext";

export class AnalyticsController {
  static async getStudent(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await AnalyticsService.getStudentAnalytics(
      req.params.studentId,
      ctx.schoolId
    );

    res.json(result);
  }
}