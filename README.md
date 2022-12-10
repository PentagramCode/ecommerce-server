# Ecommerce REST API

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript.

## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app in localhost

```
# install dependencies
yarn install

# run in dev mode on port 3000
yarn dev

# generate production build
yarn build

# run generated content in dist folder on port 3000
yarn start
```

## Running the app in sites

```
# Create or up container
docker-compose up -d
# Or
# Rebuild and up container
docker-compose up -d --build
```

## Testing

### Jest with supertest

```
yarn test
```

## Linting

```
# run linter
yarn lint
```

# Commits or branches

- Create branches with ``{feature/fix/refactor}/{name-branch}``
- Create commits with ``[ADD/FIX/REFACTOR/DELETE] descriptive comment``

## Environment variables

Create .development.env or .production.env file to define environment variables

| Variable  | Description            | Default                    |
| --------- | ---------------------- | --------                   |
| PORT      | Port to run the server | 3000                       |
| MONGO_URI | Database type          | mongodb://mongo/ecommerce  |
