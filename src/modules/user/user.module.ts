import { User } from '@entities/user.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

// NOTE: All the files, such as UserResolver and UserService, are put
//   in the same folder for easy readability as a sample.
//   They might be put in different folders for better organization
//   for production.
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
  exports: [],
})
export class UserModule {}
