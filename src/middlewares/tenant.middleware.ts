import { Request, Response, NextFunction } from "express";
import { RequestContext } from "../context/requestContext";

export const tenantMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ctx = RequestContext.get();

  if (!ctx) {
    return res.status(401).json({ message: "No request context" });
  }

  // SUPER_ADMIN can optionally act globally
  if (ctx.role === "SUPER_ADMIN") {
    return next();
  }

  if (!ctx.schoolId) {
    return res.status(403).json({
      message: "School context missing"
    });
  }

  next();
};