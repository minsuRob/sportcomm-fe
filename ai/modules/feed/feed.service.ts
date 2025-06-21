import { Injectable } from "@nestjs/common";
import { PostRepository } from "../post/post.repository";

@Injectable()
export class FeedService {
  constructor(private readonly postRepo: PostRepository) {}

  async getFeedForUser(userId: number) {
    // TODO: Implement more complex feed logic
    // For now, it fetches generic feed posts.
    // Future logic: Follow-based + Popular (likes/comments) + Personalization (simple MVP)
    return this.postRepo.findFeedPosts(userId);
  }
}
