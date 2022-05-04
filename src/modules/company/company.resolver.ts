import { Company } from '@entities/company.entity'
import { User } from '@entities/user.entity'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { CompanyService } from './company.service'

@Resolver(() => User)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @ResolveField('company', () => Company, { nullable: true })
  async getCompany(@Parent() user: User): Promise<Company | undefined> {
    const { companyId: id } = user
    if (!id) return undefined

    return this.companyService.findOne({ id })
  }
}
