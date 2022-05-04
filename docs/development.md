# Development

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# all tests
$ yarn run test:all

# test coverage
$ yarn run test:cov
```

## Removing the docker containers

```bash
# remove docker containers
$ yarn run remove

# remove docker containers and volume
$ yarn run remove:volume
```

## Inserting the sample data

```bash
# should be executed when the database is running
$ yarn run init:data
```
