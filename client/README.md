# @stakestar/subgraph-client package

GraphQL client for consuming StakeStar's The Graph GraphQL API

![package status](https://github.com/stakestar/subgraph/actions/workflows/publish-github-package.yml/badge.svg)

## How to use

To use this package in your project add this line to your `.npmrc`:

> @stakestar:registry=https://npm.pkg.github.com

And run `yarn add @stakestar/subgraph-client`

### Examples

Make predefined request via `sdk`:
```typescript
import { getBuiltGraphSDK } from '@stakestar/subgraph-client'

const sdk = getBuiltGraphSDK()

sdk
  .getStakeStarTvls() // Predefined methods are based on `client/queries/*.graphql`  
  .then(({ stakeStarTvls }) => console.log('stakeStarTvls', stakeStarTvls))
  .catch(console.error)
```

Make arbitrary request via `execute`:
```typescript
import { execute } from '@stakestar/subgraph-client'

execute(`
   query tokenRateDaily($id: ID!) {
     tokenRateDaily(id: $id) {
       id
       date
       rate
     }
   }
`, { id: 'contract-address' })
  .then(({ data }) => console.log('rate', data))
  .catch(console.error)
```

## Development

- `yarn` - install dependencies
- `yarn build:graphclient` - build the GraphQL client (The Graph Client + GraphQL schema + TypeScript types) to `./src/.graphclient/` dir
- `yarn build:package` - build the package
- Install [Prettier extension for your IDE](https://prettier.io/docs/en/editors.html) and enable "Format On Save" feature
- Enable ESLint for your IDE
 
## Production

1. Prepare for publishing
    - `yarn bump` - Bump version + add version tag + commit package.json changes
    - `git push --tags` - Push your new version tag
2. Publish
    - Go to https://github.com/stakestar/subgraph/tags, select the latest tag and click the "Create release from tag" button. A new version of the GitHub Package will be automatically built and published to the GitHub Packages registry
3. Check
    - Go to https://github.com/stakestar/subgraph/actions and make sure that the action was resolved successfully
