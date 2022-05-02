import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'

import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.entity'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @ApiProperty()
  @Field()
  @Column()
  content!: string

  @Field()
  @Index()
  @Column()
  userId!: string

  @ApiProperty({ type: () => User })
  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User
}
