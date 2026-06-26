import { prisma } from "../../config/prisma";
import { hashPassword, comparePassword } from "../../utils/password";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";

export class AuthService {
  static async register(data: any) {
    const existing = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existing) throw new Error("User already exists");

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: await hashPassword(data.password),
        role: data.role,
        schoolId: data.schoolId
      }
    });

    return user;
  }

  static async login(data: any) {
    const user = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (!user) throw new Error("Invalid credentials");

    const valid = await comparePassword(data.password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    return {
      accessToken: signAccessToken({
        userId: user.id,
        role: user.role,
        schoolId: user.schoolId
      }),
      refreshToken: signRefreshToken({
        userId: user.id,
        role: user.role,
        schoolId: user.schoolId
      })
    };
  }
}