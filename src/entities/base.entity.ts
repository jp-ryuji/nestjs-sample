import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { ApiProperty } from '@nestjs/swagger'

export abstract class BaseEntity {
  @ApiProperty({
    type: 'string',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @PrimaryGeneratedColumn('uuid')
  readonly id!: string

  @ApiProperty()
  @CreateDateColumn()
  readonly createdAt!: Date

  @ApiProperty()
  @UpdateDateColumn()
  readonly updatedAt!: Date
}
