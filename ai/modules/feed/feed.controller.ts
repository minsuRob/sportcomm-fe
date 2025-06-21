import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { FeedService } from "./feed.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("feed")
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getFeed(@Req() req) {
    // For type safety, it's better to have a defined type for the request user
    // e.g., @Req() req: Request & { user: { id: number } }
    return this.feedService.getFeedForUser(req.user.id);
  }
}
