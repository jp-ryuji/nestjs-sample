import { Module } from '@nestjs/common'
import { PostModule } from '../post.module'
import { PostLoader } from './post.loader'

@Module({
  imports: [PostModule],
  providers: [PostLoader],
  exports: [PostLoader],
})
export class PostLoaderModule {}
