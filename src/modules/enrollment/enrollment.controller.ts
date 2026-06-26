import { Request, Response } from "express";
import { EnrollmentService } from "./enrollment.service";
import { RequestContext } from "../../context/requestContext";

export class EnrollmentController {
  static async enroll(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await EnrollmentService.enrollStudent(
      req.body.studentId,
      req.body.classId,
      ctx
    );

    res.json(result);
  }

  static async getClassStudents(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await EnrollmentService.getClassStudents(
      req.params.classId,
      ctx
    );

    res.json(result);
  }

  static async getStudentClasses(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const result = await EnrollmentService.getStudentClasses(
      req.params.studentId,
      ctx
    );

    res.json(result);
  }

  static async unenroll(req: Request, res: Response) {
    const result = await EnrollmentService.unenroll(
      req.body.studentId,
      req.body.classId
    );

    res.json(result);
  }
}