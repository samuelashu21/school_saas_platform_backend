export class NotificationService {
  static async sendEmail(to: string, subject: string, body: string) {
    // placeholder (SMTP / SendGrid later)
    console.log("EMAIL SENT:", { to, subject, body });
  }

  static async assignmentCreated(email: string, title: string) {
    return this.sendEmail(
      email,
      "New Assignment Posted",
      `Assignment: ${title}`
    );
  }

  static async gradePosted(email: string, grade: number) {
    return this.sendEmail(
      email,
      "Grade Updated",
      `You received: ${grade}`
    );
  }
}