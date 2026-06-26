import { EnrollmentRepository } from "./enrollment.repository";
import { prisma } from "../../config/prisma";

export class EnrollmentService {
  static async enrollStudent(studentId: string, classId: string, ctx: any) {
    // 1. Ensure student belongs to school
    const student = await prisma.student.findFirst({
      where: {
        id: studentId,
        schoolId: ctx.schoolId
      }
    });

    if (!student) {
      throw new Error("Student not found in this school");
    }

    // 2. Ensure class belongs to same school
    const cls = await prisma.class.findFirst({
      where: {
        id: classId,
        schoolId: ctx.schoolId
      }
    });

    if (!cls) {
      throw new Error("Class not found in this school");
    }

    // 3. Prevent duplicate enrollment
    const exists = await EnrollmentRepository.exists(studentId, classId);

    if (exists) {
      throw new Error("Student already enrolled in this class");
    }

    // 4. Create enrollment
    return EnrollmentRepository.create(studentId, classId);
  }

  static async getClassStudents(classId: string, ctx: any) {
    return EnrollmentRepository.findByClass(classId);
  }

  static async getStudentClasses(studentId: string, ctx: any) {
    return EnrollmentRepository.findByStudent(studentId);
  }

  static async unenroll(studentId: string, classId: string) {
    return EnrollmentRepository.delete(studentId, classId);
  }
}