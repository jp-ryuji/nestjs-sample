import { Post } from '@entities/post.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly repo: Repository<Post>
  ) {}

  findAll(where: Partial<Post>): Promise<Post[]> {
    return this.repo.find({ where })
  }
}
