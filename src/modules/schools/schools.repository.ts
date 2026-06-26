import { prisma } from "../../config/prisma";

export class SchoolRepository {
  static create(data: any) {
    return prisma.school.create({ data });
  }

  static findAll() {
    return prisma.school.findMany();
  }
}