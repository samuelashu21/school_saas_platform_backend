import { prisma } from "../../config/prisma";

export class ClassesRepository {
  static create(data: any) {
    return prisma.class.create({ data });
  }

  static findBySchool(schoolId: string) {
    return prisma.class.findMany({
      where: { schoolId },
      include: {
        teacher: true,
        subjects: true,
        students: true
      }
    });
  }

  static findById(id: string, schoolId: string) {
    return prisma.class.findFirst({
      where: {
        id,
        schoolId
      },
      include: {
        teacher: true,
        subjects: true,
        students: true
      }
    });
  }

  static assignTeacher(classId: string, teacherId: string) {
    return prisma.class.update({
      where: { id: classId },
      data: { teacherId }
    });
  }
}