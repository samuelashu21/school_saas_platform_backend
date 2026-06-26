import { AssignmentsRepository } from "./assignments.repository";

export class AssignmentsService {
  static async createAssignment(data: any, ctx: any) {
    return AssignmentsRepository.create({
      title: data.title,
      description: data.description,
      classId: data.classId,
      schoolId: ctx.schoolId,
      dueDate: new Date(data.dueDate)
    });
  }

  static async getClassAssignments(classId: string, ctx: any) {
    return AssignmentsRepository.findByClass(classId, ctx.schoolId);
  }

  static async getAssignment(id: string, ctx: any) {
    return AssignmentsRepository.findById(id, ctx.schoolId);
  }
}