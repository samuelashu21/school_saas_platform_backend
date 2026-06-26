export class Logger {
  static info(message: string, data?: any) {
    console.log("[INFO]", message, data || "");
  }

  static error(message: string, error?: any) {
    console.error("[ERROR]", message, error || "");
  }
}