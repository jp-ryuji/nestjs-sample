import DataLoader from 'dataloader'

import { Injectable } from '@nestjs/common'
import { PostService } from '../post.service'
import { Post } from '@entities/post.entity'

export interface IPostLoaders {
  postsByUserIdsLoader: DataLoader<string, (Post | undefined)[]>
}

@Injectable()
export class PostLoader {
  constructor(private readonly postService: PostService) {}

  createLoaders(): IPostLoaders {
    const postsByUserIdsLoader = new DataLoader<string, (Post | undefined)[]>(
      async (
        userIds: ReadonlyArray<string>
      ): Promise<(Post | undefined)[][]> => {
        const posts = await this.postService.findByUserIds(userIds as string[])

        // group posts by userId
        const postsMap = new Map<string, Post[]>()
        posts.forEach((post) => {
          const existing = postsMap.get(post.userId) || []
          existing.push(post)
          postsMap.set(post.userId, existing)
        })

        return userIds.map((userId) => postsMap.get(userId) || [])
      }
    )

    return { postsByUserIdsLoader }
  }
}
