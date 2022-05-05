import { join } from 'path'

export const graphqlConfig = {
  path: '/graphql',
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  debug: true,
  playground: true,
}
