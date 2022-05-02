import { Company } from '@entities/company.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [],
  exports: [],
})
export class CompanyModule {}
