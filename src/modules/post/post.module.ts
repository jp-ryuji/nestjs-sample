import { Post } from '@entities/post.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostResolver, PostService],
  exports: [],
})
export class PostModule {}
