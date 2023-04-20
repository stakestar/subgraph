import * as fs from 'fs';
import * as Mustache from 'mustache';
import {
  ADDRESSES
} from '@stakestar/contracts'

interface Options {
  network: string
  template: string
}

const START_BLOCK = 8588980

export const prepareConfig = (options: Options) => {
  const { stakeStar, sstarETH, stakeStarRegistry, stakeStarRewards, stakeStarOracleStrict } = ADDRESSES[options.network]
  const templateString = fs.readFileSync(options.template);

  const rendered = Mustache.render(templateString.toString(), {
    network: options.network,
    sstarETHAddress: sstarETH,
    stakeStarRegistryAddress: stakeStarRegistry,
    stakeStarRewardsAddress: stakeStarRewards,
    stakeStarAddress: stakeStar,
    stakeStarOracleStrict: stakeStarOracleStrict,
    startBlock: START_BLOCK
  });

  fs.writeFileSync('subgraph.yaml', rendered);
}

export const copyAddresses = (options: Options) => {
  const { stakeStar, sstarETH } = ADDRESSES[options.network]

  const templateString = fs.readFileSync('src/generated-consts.templete');

  const rendered = Mustache.render(templateString.toString(), {
    sstarETHAddress: sstarETH,
    stakeStarAddress: stakeStar,
  });

  fs.writeFileSync('src/generated-consts.ts', rendered);
}