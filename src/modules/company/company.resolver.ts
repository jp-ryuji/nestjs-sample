import { Company } from '@entities/company.entity'
import { User } from '@entities/user.entity'
import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { ICompanyLoaders } from './company-loader/company.loader'

@Resolver(() => User)
export class CompanyResolver {
  @ResolveField('company', () => Company, { nullable: true })
  async getCompany(
    @Parent() user: User,
    @Context('companyLoaders')
    { companiesByIdsLoader: loader }: ICompanyLoaders
  ): Promise<Company | undefined> {
    const { companyId: id } = user
    if (!id) return undefined

    return loader.load(id)
  }
}
