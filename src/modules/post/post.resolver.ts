import { Post } from '@entities/post.entity'
import { User } from '@entities/user.entity'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { PostService } from './post.service'

@Resolver(() => User)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() user: User): Promise<Post[]> {
    const { id } = user
    return this.postService.findAll({ userId: id })
  }
}
