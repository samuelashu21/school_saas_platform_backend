import { AttendanceRepository } from "./attendance.repository";

export class AttendanceService {
  static async markAttendance(data: any, ctx: any) {
    return AttendanceRepository.mark({
      studentId: data.studentId,
      classId: data.classId,
      schoolId: ctx.schoolId,
      date: new Date(data.date),
      status: data.status
    });
  }

  static async getClassAttendance(classId: string, ctx: any) {
    return AttendanceRepository.findByClass(classId, ctx.schoolId);
  }

  static async getStudentAttendance(studentId: string) {
    return AttendanceRepository.findByStudent(studentId);
  }
}