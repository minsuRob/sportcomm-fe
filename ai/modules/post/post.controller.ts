import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Req,
  UseGuards,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll() {
    return this.postService.findAll();
  }

  @HttpPost()
  @UseGuards(JwtAuthGuard)
  async create(@Body() body, @Req() req) {
    return this.postService.create(body, req.user);
  }
}
