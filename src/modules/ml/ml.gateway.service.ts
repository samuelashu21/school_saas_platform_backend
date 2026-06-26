import axios from "axios";
import { AnalyticsService } from "../analytics/analytics.service";

export class MLGatewayService {
  static async predictStudentRisk(studentId: string, schoolId: string) {
    // 1. Get engineered features
    const features = await AnalyticsService.getStudentAnalytics(
      studentId,
      schoolId
    );

    // 2. Send to ML service
    const response = await axios.post(
      "http://ml-service:8000/predict",
      features
    );

    return response.data;
  }
}