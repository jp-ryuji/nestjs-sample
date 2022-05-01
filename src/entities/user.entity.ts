import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { BaseEntity } from './base.entity'

import { ApiProperty } from '@nestjs/swagger'
import { Company } from './company.entity'
import { Post } from './post.entity'

@Entity()
export class User extends BaseEntity {
  @ApiProperty()
  @Index()
  @Column()
  name!: string

  @Index()
  @Column({ nullable: true })
  companyId?: string | null

  @ApiProperty({ type: () => Company })
  @ManyToOne(() => Company, (company) => company.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'companyId' })
  company?: Company | null

  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[]
}
