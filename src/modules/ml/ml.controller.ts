import { Request, Response } from "express";
import { MLGatewayService } from "./ml.gateway.service";
import { RequestContext } from "../../context/requestContext";

export class MLController {
  static async predictRisk(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await MLGatewayService.predictStudentRisk(
      req.params.studentId,
      ctx.schoolId
    );

    res.json(result);
  }
}