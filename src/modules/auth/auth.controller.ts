import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    const data = await AuthService.register(req.body);
    res.json(data);
  }

  static async login(req: Request, res: Response) {
    const data = await AuthService.login(req.body);
    res.json(data);
  } 
}