import { BigInt } from "@graphprotocol/graph-ts"
import {
  Stake
} from "../generated/StakeStar/StakeStar"
import { StakeStarTvl } from "../generated/schema"
import { STAKESTAR_ADDRESS } from "./addresses"

export function handleStake(event: Stake): void {
  let entity = StakeStarTvl.load(STAKESTAR_ADDRESS)
  if (entity === null) {
    entity = new StakeStarTvl(STAKESTAR_ADDRESS)
    entity.totalETH = BigInt.fromI32(0)
  }

  entity.totalETH = entity.totalETH.plus(event.params.amount)

  entity.save()
}
