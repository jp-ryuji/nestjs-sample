import { Company } from '@entities/company.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly repo: Repository<Company>
  ) {}

  findByIds(ids: string[]): Promise<Company[]> {
    return this.repo.find({ where: { id: In(ids) } })
  }

  findOne(
    where: Partial<Company>,
    relations?: string[]
  ): Promise<Company | undefined> {
    return this.repo.findOne({ where, relations })
  }
}
