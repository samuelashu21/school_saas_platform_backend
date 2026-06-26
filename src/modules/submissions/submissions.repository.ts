import { prisma } from "../../config/prisma";

export class SubmissionsRepository {
  static create(data: any) {
    return prisma.submission.create({ data });
  }

  static findByAssignment(assignmentId: string) {
    return prisma.submission.findMany({
      where: { assignmentId },
      include: {
        student: {
          include: { user: true }
        }
      }
    });
  }

  static findByStudent(studentId: string) {
    return prisma.submission.findMany({
      where: { studentId }
    });
  }
}