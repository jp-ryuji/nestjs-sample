import { Column, Entity, Index, OneToMany } from 'typeorm'
import { BaseEntity } from './base.entity'

import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.entity'

@Entity()
export class Company extends BaseEntity {
  @ApiProperty()
  @Index()
  @Column()
  name!: string

  @OneToMany(() => User, (user) => user.company)
  users!: User[]
}
