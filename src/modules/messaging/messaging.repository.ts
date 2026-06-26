import { prisma } from "../../config/prisma";

export class MessagingRepository {
  static createThread(data: any) {
    return prisma.messageThread.create({
      data
    });
  }

  static sendMessage(data: any) {
    return prisma.message.create({
      data
    });
  }

  static getThreads(schoolId: string) {
    return prisma.messageThread.findMany({
      where: { schoolId },
      include: {
        messages: true
      }
    });
  }

  static getThreadById(id: string) {
    return prisma.messageThread.findFirst({
      where: { id },
      include: {
        messages: true
      }
    });
  }
}