# Build .graphclient/
npx graphclient build

# Fix .graphclient/ dependencies
cd .graphclient/ && yarn add graphql @graphql-mesh/cache-localforage @graphql-mesh/cross-helpers @graphql-mesh/graphql @graphql-mesh/http @graphql-mesh/merger-bare @graphql-mesh/runtime @graphql-mesh/store @graphql-mesh/types @graphql-mesh/utils @whatwg-node/fetch
