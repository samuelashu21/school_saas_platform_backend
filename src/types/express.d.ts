 declare namespace Express {
  export interface Request {
    user?: {
      userId: string;
      role: string;
      schoolId: string | null;
    };
  }
}