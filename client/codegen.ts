import type { CodegenConfig } from '@graphql-codegen/cli';
 
 const config: CodegenConfig = {
  overwrite: true,
  schema: "https://subgraph.stakestar.io/subgraphs/name/stakestar-testnet",
  documents: "src/queries",
   generates: {
     'sdk/index.ts': {
       plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
       config: {
         rawRequest: true
       },
     },
   },
 };
 export default config;