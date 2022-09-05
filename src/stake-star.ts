import { BigInt } from "@graphprotocol/graph-ts"
import {
  Stake
} from "../generated/StakeStar/StakeStar"
import { StakeStarTvl } from "../generated/schema"

export function handleStake(event: Stake): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400

  const prevDayTimestamp = timestamp - 86400
  const prevDayID = prevDayTimestamp / 86400

  let prevDayEntity = StakeStarTvl.load(prevDayID.toString())
  let prevDayTotalETH = BigInt.fromI32(0)
  if (prevDayEntity !== null) {
    prevDayTotalETH = prevDayEntity.totalETH
  }

  let entity = StakeStarTvl.load(dayID.toString())
  if (entity === null) {
    entity = new StakeStarTvl(dayID.toString())
    entity.date = dayStartTimestamp
    entity.totalETH = prevDayTotalETH
  }

  entity.totalETH = entity.totalETH.plus(event.params.amount)

  entity.save()
}
