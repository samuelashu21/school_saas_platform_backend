import { GradebookRepository } from "./gradebook.repository";

export class GradebookService {
  static async assignGrade(data: any, ctx: any) {
    return GradebookRepository.create({
      studentId: data.studentId,
      classId: data.classId,
      schoolId: ctx.schoolId,
      value: data.value,
      feedback: data.feedback
    });
  }

  static async getClassGrades(classId: string, ctx: any) {
    return GradebookRepository.findByClass(classId, ctx.schoolId);
  }

  static async getStudentGrades(studentId: string, ctx: any) {
    return GradebookRepository.findByStudent(studentId, ctx.schoolId);
  }

  static async updateGrade(id: string, data: any) {
    return GradebookRepository.updateGrade(
      id,
      data.value,
      data.feedback
    );
  }
}