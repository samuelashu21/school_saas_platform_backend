import { prisma } from "../../config/prisma";

export class StudentsRepository {
  static create(data: any) {
    return prisma.student.create({ data });
  }

  static findBySchool(schoolId: string) {
    return prisma.student.findMany({
      where: { schoolId },
      include: {
        user: true,
        enrollments: true
      }
    });
  }

  static findById(id: string, schoolId: string) {
    return prisma.student.findFirst({
      where: {
        id,
        schoolId
      },
      include: {
        user: true,
        enrollments: true
      }
    });
  }
}