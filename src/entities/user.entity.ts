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
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @ApiProperty()
  @Field()
  @Index()
  @Column()
  name!: string

  @Field({ nullable: true })
  @Index()
  @Column({ nullable: true })
  companyId?: string | null

  @ApiProperty({ type: () => Company })
  @Field(() => Company, { nullable: true })
  @ManyToOne(() => Company, (company) => company.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'companyId' })
  company?: Company | null

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[]
}
