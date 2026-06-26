import { Request, Response } from "express";
import { AttendanceService } from "./attendance.service";
import { RequestContext } from "../../context/requestContext";

export class AttendanceController {
  static async mark(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await AttendanceService.markAttendance(req.body, ctx);
    res.json(result);
  }

  static async getClass(req: Request, res: Response) {
    const ctx = RequestContext.get();
    const result = await AttendanceService.getClassAttendance(req.params.classId, ctx);
    res.json(result);
  }

  static async getStudent(req: Request, res: Response) {
    const result = await AttendanceService.getStudentAttendance(req.params.studentId);
    res.json(result);
  }
}