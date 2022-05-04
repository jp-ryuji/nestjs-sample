import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  // FIXME: These values should be set via env vars.
  type: 'postgres',
  host: 'nestjs-sample-db',
  port: 5432,
  username: 'pgadmin',
  password: 'pgpassword',
  database: 'pgdb',
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: true,
  logging: ['query', 'info'],
}
