import { prisma } from "../../config/prisma";

export class EnrollmentRepository {
  static create(studentId: string, classId: string) {
    return prisma.enrollment.create({
      data: {
        studentId,
        classId
      }
    });
  }

  static findByClass(classId: string) {
    return prisma.enrollment.findMany({
      where: { classId },
      include: {
        student: {
          include: {
            user: true
          }
        }
      }
    });
  }

  static findByStudent(studentId: string) {
    return prisma.enrollment.findMany({
      where: { studentId },
      include: {
        class: true
      }
    });
  }

  static exists(studentId: string, classId: string) {
    return prisma.enrollment.findFirst({
      where: {
        studentId,
        classId
      }
    });
  }

  static delete(studentId: string, classId: string) {
    return prisma.enrollment.deleteMany({
      where: {
        studentId,
        classId
      }
    });
  }
}