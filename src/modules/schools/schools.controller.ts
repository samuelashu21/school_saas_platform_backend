import { Request, Response, NextFunction } from "express";
import { SchoolService } from "./schools.service";

export class SchoolController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await SchoolService.createSchool(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await SchoolService.getSchools();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}