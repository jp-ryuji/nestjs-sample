import * as request from 'supertest'

import { FastifyAdapter } from '@nestjs/platform-fastify/adapters'
import { NestFastifyApplication } from '@nestjs/platform-fastify/interfaces'
import { Test, TestingModule } from '@nestjs/testing'

import { AppModule } from '../src/app.module'

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter()
    )
    await app.init()
    await app.getHttpAdapter().getInstance().ready()
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })
})
