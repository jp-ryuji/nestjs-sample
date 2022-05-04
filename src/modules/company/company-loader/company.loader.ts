import * as DataLoader from 'dataloader'

import { Injectable } from '@nestjs/common'
import { CompanyService } from '../company.service'
import { Company } from '@entities/company.entity'

export interface ICompanyLoaders {
  companiesByIdsLoader: DataLoader<string, Company | undefined>
}

@Injectable()
export class CompanyLoader {
  constructor(private readonly companyService: CompanyService) {}

  createLoaders(): ICompanyLoaders {
    const companiesByIdsLoader = new DataLoader<string, Company | undefined>(
      async (ids: ReadonlyArray<string>): Promise<(Company | undefined)[]> => {
        const companies = await this.companyService.findByIds(ids as string[])

        return ids.map((id) => companies.find((h) => h.id === id))
      }
    )

    return { companiesByIdsLoader }
  }
}
