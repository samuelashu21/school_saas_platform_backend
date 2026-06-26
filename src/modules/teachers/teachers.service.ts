import { TeachersRepository } from "./teachers.repository";

export class TeachersService {
  static async createTeacher(data: any, ctx: any) {
    return TeachersRepository.create({
      userId: data.userId,
      schoolId: ctx.schoolId,
      firstName: data.firstName,
      lastName: data.lastName,
      subject: data.subject || null
    });
  }

  static async getTeachers(ctx: any) {
    return TeachersRepository.findBySchool(ctx.schoolId);
  }

  static async getTeacherById(id: string, ctx: any) {
    const teacher = await TeachersRepository.findById(id, ctx.schoolId);

    if (!teacher) {
      throw new Error("Teacher not found");
    }

    return teacher;
  }

  static async assignClass(teacherId: string, classId: string, ctx: any) {
    // future safeguard: verify class belongs to same school
    return TeachersRepository.assignClass(teacherId, classId);
  }
}