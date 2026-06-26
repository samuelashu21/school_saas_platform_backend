import { Request, Response } from "express";
import { AssignmentsService } from "./assignments.service";
import { RequestContext } from "../../context/requestContext";

export class AssignmentsController {
  static async create(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await AssignmentsService.createAssignment(req.body, ctx);
    res.json(result);
  }

  static async getClass(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await AssignmentsService.getClassAssignments(req.params.classId, ctx);
    res.json(result);
  }

  static async getOne(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await AssignmentsService.getAssignment(req.params.id, ctx);
    res.json(result);
  }
}