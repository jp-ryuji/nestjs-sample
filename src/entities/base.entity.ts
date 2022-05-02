import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { ApiProperty } from '@nestjs/swagger'
import { Field, ID } from '@nestjs/graphql'

export abstract class BaseEntity {
  @ApiProperty({
    type: 'string',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id!: string

  @ApiProperty()
  @Field()
  @CreateDateColumn()
  readonly createdAt!: Date

  @ApiProperty()
  @Field()
  @UpdateDateColumn()
  readonly updatedAt!: Date
}
