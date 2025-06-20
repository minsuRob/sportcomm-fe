import { Injectable } from "@nestjs/common";
import { PostRepository } from "../post/post.repository";

@Injectable()
export class FeedService {
  constructor(private readonly postRepo: PostRepository) {}

  async getFeedForUser(userId: number) {
    // 팔로우 기반 + 인기글(좋아요/댓글 많은 순) + 개인화(간단 MVP)
    return this.postRepo.findFeedPosts(userId);
  }
}
