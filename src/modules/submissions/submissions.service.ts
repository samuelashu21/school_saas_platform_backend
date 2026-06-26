import { SubmissionsRepository } from "./submissions.repository";

export class SubmissionsService {
  static async submit(data: any, ctx: any) {
    return SubmissionsRepository.create({
      assignmentId: data.assignmentId,
      studentId: data.studentId,
      schoolId: ctx.schoolId,
      content: data.content
    });
  }

  static async getByAssignment(assignmentId: string) {
    return SubmissionsRepository.findByAssignment(assignmentId);
  }

  static async getByStudent(studentId: string) {
    return SubmissionsRepository.findByStudent(studentId);
  }
}