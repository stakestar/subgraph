import {
   Pull as PullEvent
} from "../generated/StakeStarRewards/StakeStarRewards"
import {
  StakeStarRewardsDaily,
  StakeStarRewardsTotal
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"
import { DEFAULT_ID } from "./consts"

export function handlePullEvent(event: PullEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400

  let stakeStarTotalRewards = StakeStarRewardsTotal.load(DEFAULT_ID)

  if (stakeStarTotalRewards === null) {
    stakeStarTotalRewards = new StakeStarRewardsTotal(DEFAULT_ID)
    stakeStarTotalRewards.rewards = BigInt.fromI32(0)
  }
  const totalRewards = stakeStarTotalRewards.rewards

  let entity = StakeStarRewardsDaily.load(dayID.toString())
  if (entity === null) {
    entity = new StakeStarRewardsDaily(dayID.toString())
    entity.date = dayStartTimestamp
    entity.rewards = totalRewards
  }

  entity.rewards = entity.rewards.plus(event.params.amount)
  stakeStarTotalRewards.rewards = stakeStarTotalRewards.rewards.plus(event.params.amount)

  entity.save()
  stakeStarTotalRewards.save()
}
