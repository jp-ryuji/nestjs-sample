import { NotFoundException } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { User } from '@entities/user.entity'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'userById' })
  async getUserById(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findOne({ id })
    if (!user) {
      throw new NotFoundException(`User not found (id: ${id})`)
    }

    return user
  }
}
