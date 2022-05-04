import { Module } from '@nestjs/common'
import { CompanyModule } from '../company.module'
import { CompanyLoader } from './company.loader'

@Module({
  imports: [CompanyModule],
  providers: [CompanyLoader],
  exports: [CompanyLoader],
})
export class CompanyLoaderModule {}
