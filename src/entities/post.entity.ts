import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'

import { ApiProperty } from '@nestjs/swagger'
import { User } from './user.entity'

@Entity()
export class Post extends BaseEntity {
  @ApiProperty()
  @Column()
  content!: string

  @Index()
  @Column({ nullable: true })
  userId!: string

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User
}
