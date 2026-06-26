import { prisma } from "../../config/prisma";

export class PredictionsRepository {
  static create(data: any) {
    return prisma.studentPrediction.create({ data });
  }

  static findLatest(studentId: string, schoolId: string) {
    return prisma.studentPrediction.findFirst({
      where: {
        studentId,
        schoolId
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  static findHistory(studentId: string, schoolId: string) {
    return prisma.studentPrediction.findMany({
      where: {
        studentId,
        schoolId
      },
      orderBy: {
        createdAt: "asc"
      }
    });
  }

  static findAtRisk(schoolId: string) {
    return prisma.studentPrediction.findMany({
      where: {
        schoolId,
        riskLevel: {
          gte: 2
        }
      }
    });
  }
}