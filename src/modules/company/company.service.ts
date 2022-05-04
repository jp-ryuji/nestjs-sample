import { Company } from '@entities/company.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly repo: Repository<Company>
  ) {}

  findOne(
    where: Partial<Company>,
    relations?: string[]
  ): Promise<Company | undefined> {
    return this.repo.findOne({ where, relations })
  }
}
