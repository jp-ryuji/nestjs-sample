import { Company } from '@entities/company.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CompanyResolver } from './company.resolver'
import { CompanyService } from './company.service'

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyResolver, CompanyService],
  exports: [],
})
export class CompanyModule {}
