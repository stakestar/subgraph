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
  const { stakeStar, stakeStarETH, stakeStarRegistry, stakeStarRewards } = ADDRESSES[options.network]
  const templateString = fs.readFileSync(options.template);

  const rendered = Mustache.render(templateString.toString(), {
    network: options.network,
    stakeStarETHAddress: stakeStarETH,
    stakeStarRegistryAddress: stakeStarRegistry,
    stakeStarRewardsAddress: stakeStarRewards,
    stakeStarAddress: stakeStar,
    startBlock: START_BLOCK
  });

  fs.writeFileSync('subgraph.yaml', rendered);
}

export const copyAddresses = (options: Options) => {
  const { stakeStar, stakeStarETH } = ADDRESSES[options.network]

  const templateString = fs.readFileSync('src/generated-consts.templete');

  const rendered = Mustache.render(templateString.toString(), {
    stakeStarETHAddress: stakeStarETH,
    stakeStarAddress: stakeStar,
  });

  fs.writeFileSync('src/generated-consts.ts', rendered);
}