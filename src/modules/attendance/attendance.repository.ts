import { prisma } from "../../config/prisma";

export class AttendanceRepository {
  static mark(data: any) {
    return prisma.attendance.create({
      data
    });
  }

  static findByClass(classId: string, schoolId: string) {
    return prisma.attendance.findMany({
      where: {
        classId,
        schoolId
      },
      include: {
        student: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        date: "desc"
      }
    });
  }

  static findByStudent(studentId: string) {
    return prisma.attendance.findMany({
      where: {
        studentId
      },
      orderBy: {
        date: "desc"
      }
    });
  }
}