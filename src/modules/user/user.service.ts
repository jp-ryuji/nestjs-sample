import { User } from '@entities/user.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>
  ) {}

  findOneByIdWithRelations(
    id: string,
    relations?: string[]
  ): Promise<User | undefined> {
    return this.repo.findOne({ where: { id }, relations })
  }
}
