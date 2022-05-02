import { ApolloDriver } from '@nestjs/apollo'
import { join } from 'path'

export const graphqlConfig = {
  driver: ApolloDriver,
  path: '/graphql',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  context: ({ req }) => ({ req }),
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  debug: true,
  playground: true,
}
