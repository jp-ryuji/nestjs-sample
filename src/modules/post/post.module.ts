import { Post } from '@entities/post.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [],
  exports: [],
})
export class PostModule {}
