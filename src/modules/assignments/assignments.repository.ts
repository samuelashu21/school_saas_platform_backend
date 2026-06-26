import { prisma } from "../../config/prisma";

export class AssignmentsRepository {
  static create(data: any) {
    return prisma.assignment.create({ data });
  }

  static findByClass(classId: string, schoolId: string) {
    return prisma.assignment.findMany({
      where: {
        classId,
        schoolId
      },
      include: {
        submissions: true
      }
    });
  }

  static findById(id: string, schoolId: string) {
    return prisma.assignment.findFirst({
      where: {
        id,
        schoolId
      }
    });
  }
}