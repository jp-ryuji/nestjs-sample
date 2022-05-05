import { Post } from '@entities/post.entity'
import { User } from '@entities/user.entity'
import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { IPostLoaders } from './post-loader/post.loader'

@Resolver(() => User)
export class PostResolver {
  @ResolveField('posts', () => [Post])
  async getPosts(
    @Parent() user: User,
    @Context('postLoaders')
    { postsByUserIdsLoader: loader }: IPostLoaders
  ): Promise<Post[]> {
    const { id } = user
    return loader.load(id)
  }
}
