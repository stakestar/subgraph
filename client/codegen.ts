import type { CodegenConfig } from '@graphql-codegen/cli';
 
 const config: CodegenConfig = {
  overwrite: true,
  schema: "http://139.162.184.96:8000/subgraphs/name/stakestar-testnet/graphql",
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