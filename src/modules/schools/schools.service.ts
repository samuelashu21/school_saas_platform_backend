import { SchoolRepository } from "./schools.repository";

export class SchoolService {
  static async createSchool(data: any) {
    return SchoolRepository.create(data);
  }

  static async getSchools() {
    return SchoolRepository.findAll();
  }
}