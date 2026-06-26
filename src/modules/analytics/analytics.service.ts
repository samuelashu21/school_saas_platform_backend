import { prisma } from "../../config/prisma";

export class AnalyticsService {
  static async getStudentAnalytics(studentId: string, schoolId: string) {
    const attendance = await prisma.attendance.findMany({
      where: { studentId, schoolId }
    });

    const grades = await prisma.grade.findMany({
      where: { studentId, schoolId }
    });

    const submissions = await prisma.submission.findMany({
      where: { studentId, schoolId }
    });

    const attendanceRate =
      attendance.length === 0
        ? 0
        : attendance.filter(a => a.status === "PRESENT").length / attendance.length;

    const avgGrade =
      grades.length === 0
        ? 0
        : grades.reduce((a, b) => a + b.value, 0) / grades.length;

    const submissionRate =
      submissions.length / (submissions.length + 1); // simplified baseline

    return {
      studentId,
      attendanceRate,
      avgGrade,
      submissionRate
    };
  }
}