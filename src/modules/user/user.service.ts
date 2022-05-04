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

  findAll(where?: Partial<User>): Promise<User[]> {
    return this.repo.find({ where })
  }

  findOne(
    where: Partial<User>,
    relations?: string[]
  ): Promise<User | undefined> {
    return this.repo.findOne({ where, relations })
  }
}
