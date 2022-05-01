import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify/adapters/fastify-adapter';
import { NestFastifyApplication } from '@nestjs/platform-fastify/interfaces/nest-fastify-application.interface';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
