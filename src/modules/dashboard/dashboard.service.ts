import { prisma } from "../../config/prisma";

export class DashboardService {
  static async getSchoolOverview(schoolId: string) {
    const students = await prisma.student.count({
      where: { schoolId }
    });

    const attendance = await prisma.attendance.findMany({
      where: { schoolId }
    });

    const grades = await prisma.grade.findMany({
      where: { schoolId }
    });

    const avgAttendance =
      attendance.length === 0
        ? 0
        : attendance.filter(a => a.status === "PRESENT").length /
          attendance.length;

    const avgGrade =
      grades.length === 0
        ? 0
        : grades.reduce((a, b) => a + b.value, 0) / grades.length;

    return {
      students,
      avgAttendance,
      avgGrade
    };
  }
}