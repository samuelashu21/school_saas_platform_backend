export class DashboardController {
  static async overview(req: Request, res: Response) {
    const ctx = RequestContext.get();

    const data = await DashboardService.getSchoolOverview(ctx.schoolId);

    res.json(data);
  }
}