import type { CodegenConfig } from '@graphql-codegen/cli';
 
 const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.thegraph.com/subgraphs/name/arsoba/stakestar-test",
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