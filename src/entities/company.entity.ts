import { Column, Entity, Index, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'

import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.entity'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity()
export class Company extends BaseEntity {
  @ApiProperty()
  @Field()
  @Index()
  @Column()
  name!: string

  @Field(() => [User])
  @OneToMany(() => User, (user) => user.company)
  users!: User[]
}
