import { MLGatewayService } from "../ml/ml.gateway.service";
import { PredictionsRepository } from "./predictions.repository";

export class PredictionsService {
  static async getStudentPrediction(studentId: string, schoolId: string) {
    // 1. check cache (latest prediction)
    const cached = await PredictionsRepository.findLatest(studentId, schoolId);

    const ONE_DAY = 1000 * 60 * 60 * 24;

    if (cached && Date.now() - cached.createdAt.getTime() < ONE_DAY) {
      return cached;
    }

    // 2. call ML service
    const mlResult = await MLGatewayService.predictStudentRisk(
      studentId,
      schoolId
    );

    // 3. store result
    const saved = await PredictionsRepository.create({
      studentId,
      schoolId,
      riskLevel: mlResult.risk_level,
      confidence: mlResult.confidence || 0.8,
      attendanceRate: mlResult.attendanceRate,
      avgGrade: mlResult.avgGrade,
      submissionRate: mlResult.submissionRate
    });

    return saved;
  }

  static async getStudentHistory(studentId: string, schoolId: string) {
    return PredictionsRepository.findHistory(studentId, schoolId);
  }

  static async getAtRiskStudents(schoolId: string) {
    return PredictionsRepository.findAtRisk(schoolId);
  }
}