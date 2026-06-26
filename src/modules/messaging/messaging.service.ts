import { MessagingRepository } from "./messaging.repository";

export class MessagingService {
  static async createThread(data: any, ctx: any) {
    return MessagingRepository.createThread({
      schoolId: ctx.schoolId,
      subject: data.subject
    });
  }

  static async sendMessage(data: any, ctx: any) {
    return MessagingRepository.sendMessage({
      threadId: data.threadId,
      senderId: ctx.userId,
      content: data.content
    });
  }

  static async getThreads(ctx: any) {
    return MessagingRepository.getThreads(ctx.schoolId);
  }

  static async getThread(id: string) {
    return MessagingRepository.getThreadById(id);
  }
}