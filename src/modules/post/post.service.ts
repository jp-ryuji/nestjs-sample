import { Post } from '@entities/post.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly repo: Repository<Post>
  ) {}

  findAll(where: Partial<Post>): Promise<Post[]> {
    return this.repo.find({ where })
  }

  findByUserIds(userIds: string[]): Promise<Post[]> {
    return this.repo.find({ where: { userId: In(userIds) } })
  }
}
