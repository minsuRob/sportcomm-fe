import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { FeedService } from "./feed.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("feed")
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getFeed(@Req() req) {
    return this.feedService.getFeedForUser(req.user.id);
  }
}
