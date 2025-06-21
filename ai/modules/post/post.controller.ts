import {
  Controller,
  Get,
  Post as HttpPost,
  Body,
  Req,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { PostService } from "./post.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

// Define a DTO for creating a post for validation and type safety
export class CreatePostDto {
  content: string;
  // Add other properties like 'image_url', 'tags', etc. as needed
}

// Define a type for the authenticated user on the request object
interface AuthenticatedRequest extends Request {
  user: {
    id: number;
    email: string;
  };
}

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll() {
    return this.postService.findAll();
  }

  @HttpPost()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body(new ValidationPipe()) body: CreatePostDto,
    @Req() req: AuthenticatedRequest,
  ) {
    // Pass the user object from the request, which is added by the JwtAuthGuard
    return this.postService.create(body, req.user);
  }
}
