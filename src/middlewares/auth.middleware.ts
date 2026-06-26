import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { RequestContext } from "../context/requestContext";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = verifyAccessToken(token) as any;

    RequestContext.run(
      {
        userId: decoded.userId,
        role: decoded.role,
        schoolId: decoded.schoolId
      },
      () => next()
    );
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};