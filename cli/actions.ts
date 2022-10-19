import * as fs from 'fs';
import * as Mustache from 'mustache';
import {
  ADDRESSES,
  Network
} from '@stakestar/contracts'

interface Options {
  network: string
  template: string
}

export const prepareConfig = (options: Options) => {
  const { stakeStar, stakeStarETH, stakeStarRegistry, stakeStarRewards } = ADDRESSES[options.network]
  const templateString = fs.readFileSync(options.template);

  const rendered = Mustache.render(templateString.toString(), {
    network: options.network,
    stakeStarETHAddress: stakeStarETH,
    stakeStarRegistryAddress: stakeStarRegistry,
    stakeStarRewardsAddress: stakeStarRewards,
    stakeStarAddress: stakeStar
  });

  fs.writeFileSync('subgraph.yaml', rendered);
}