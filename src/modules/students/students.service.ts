import { StudentsRepository } from "./students.repository";

export class StudentsService {
  static async createStudent(data: any, ctx: any) {
    return StudentsRepository.create({
      userId: data.userId,
      schoolId: ctx.schoolId,
      firstName: data.firstName,
      lastName: data.lastName,
      grade: data.grade
    });
  }

  static async getStudents(ctx: any) {
    return StudentsRepository.findBySchool(ctx.schoolId);
  }

  static async getStudentById(id: string, ctx: any) {
    const student = await StudentsRepository.findById(id, ctx.schoolId);

    if (!student) {
      throw new Error("Student not found");
    }

    return student;
  }
}