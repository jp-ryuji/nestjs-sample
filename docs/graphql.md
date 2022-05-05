# GraphQL

## Apollo Server

Apollo Server is adopted as a GraphQL server.

See more: [API Reference: ApolloServer](https://www.apollographql.com/docs/apollo-server/api/apollo-server/)

## Playground

- You can access GraphQL playground as follows.
  - local
    - http://localhost:3002/graphql

		> The port depends on what you expose. See `docker/dev/docker-compose.yml`.

- You might want to change the following settings from the Settings on the top right corner.
  ```
  "request.credentials": "include", // or "same-origin". default: "omit"
  "schema.polling.enable": false, // default: true
  ```

## [schema.gql](../src/schema.gql)

### How to update it

- It is automatically generated/updated on the server (Nest) startup at this moment. So you have to launch the server every time changes on the schema are made to update it.
  - The GraphQL module should be imported in `src/app.module.ts` to make changes take effect.

## DataLoader

[DataLoader](https://github.com/graphql/dataloader) is adopted to solve the N+1 problem.
