import { ClassesRepository } from "./classes.repository";

export class ClassesService {
  static async createClass(data: any, ctx: any) {
    return ClassesRepository.create({
      name: data.name,
      grade: data.grade,
      schoolId: ctx.schoolId,
      teacherId: data.teacherId || null
    });
  }

  static async getClasses(ctx: any) {
    return ClassesRepository.findBySchool(ctx.schoolId);
  }

  static async getClassById(id: string, ctx: any) {
    const cls = await ClassesRepository.findById(id, ctx.schoolId);

    if (!cls) {
      throw new Error("Class not found");
    }

    return cls;
  }

  static async assignTeacher(classId: string, teacherId: string, ctx: any) {
    // future: validate teacher belongs to same school
    return ClassesRepository.assignTeacher(classId, teacherId);
  }
}