import { prisma } from "../../config/prisma";

export class TeachersRepository {
  static create(data: any) {
    return prisma.teacher.create({ data });
  }

  static findBySchool(schoolId: string) {
    return prisma.teacher.findMany({
      where: { schoolId },
      include: {
        user: true,
        classes: true
      }
    });
  }

  static findById(id: string, schoolId: string) {
    return prisma.teacher.findFirst({
      where: {
        id,
        schoolId
      },
      include: {
        user: true,
        classes: true
      }
    });
  }

  static assignClass(teacherId: string, classId: string) {
    return prisma.class.update({
      where: { id: classId },
      data: {
        teacherId
      }
    });
  }
}