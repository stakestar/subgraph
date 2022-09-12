# subgraph-client

GraphQL client for consuming StakeStar's The Graph GraphQL API

## How to use

To use this package in your project add this line to your `.npmrc`:

> @stakestar:registry=https://npm.pkg.github.com

And run `yarn add @stakestar/subgraph-client`

## Development

- `yarn` - install dependencies
- `yarn build:graphclient` - build the GraphQL client (The Graph Client + GraphQL schema + TypeScript types) to `./src/.graphclient/` dir
- `yarn lint` and `yarn lint:fix` - lint the code
- Install [Prettier extension for your IDE](https://prettier.io/docs/en/editors.html) and enable "Format On Save" feature
- Enable ESLint for your IDE
 
## Production

1. Prepare for publishing
    - `yarn bump` - Bump version + add version tag + commit package.json changes
    - `git push --tags` - Push your new version tag
2. Publish
    - Go to https://github.com/stakestar/subgraph-client/tags, select the latest tag and click the "Create release from tag" button. A new version of the GitHub Package will be automatically built and published to the GitHub Packages registry
3. Check
    - Go to https://github.com/stakestar/subgraph-client/actions and make sure that the action was resolved successfully
