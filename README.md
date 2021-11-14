<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Миграции

С миграциями необходимо работать через typeorm cli. Поэтому его необходимо сначала установить npm i -g typeorm, либо запускать через npx typeorm <params> без установки.

### Создание миграций для существующей сущности (Entity)

```bash
# Generate a migration from existing table schema
typeorm migration:generate -n User
```

### Запуск миграций

Чтобы запустить миграции необходимо сначала скомпилировать ts файлы в js. И после этого запускать, поскольку команды migration:run и migration:revert работают только с файлами .js

```bash
# Compile migrations ts files
tsc

# Run migrations
typeorm migration:run
```

## License

Nest is [MIT licensed](LICENSE).
