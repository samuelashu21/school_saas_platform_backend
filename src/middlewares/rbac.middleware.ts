import { Request, Response, NextFunction } from "express";
import { RequestContext } from "../context/requestContext";

export const rbac =
  (...allowedRoles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const ctx = RequestContext.get();

    if (!ctx) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!allowedRoles.includes(ctx.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };