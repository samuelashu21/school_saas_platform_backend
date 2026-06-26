import { prisma } from "../../config/prisma";

export class GradebookRepository {
  static create(data: any) {
    return prisma.grade.create({ data });
  }

  static findByClass(classId: string, schoolId: string) {
    return prisma.grade.findMany({
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
        createdAt: "desc"
      }
    });
  }

  static findByStudent(studentId: string, schoolId: string) {
    return prisma.grade.findMany({
      where: {
        studentId,
        schoolId
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  static updateGrade(id: string, value: number, feedback?: string) {
    return prisma.grade.update({
      where: { id },
      data: {
        value,
        feedback
      }
    });
  }
}