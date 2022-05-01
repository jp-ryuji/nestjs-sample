import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  )

  if (process.env.NODE_ENV !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('nest')
      .setDescription('NestJS Endpoint List')
      .setVersion('0.0.1')
      .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api', app, document)
  }

  await app.listen(3000) // FIXME: The value should be set via env var.
}
bootstrap()
