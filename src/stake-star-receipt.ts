import {
  StakeStarReceiptUpdateRate as StakeStarReceiptUpdateRateEvent
} from "../generated/StakeStarReceipt/StakeStarReceipt"
import {
  TokenRateDayAvg
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleUpdateRate(event: StakeStarReceiptUpdateRateEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400
  let entity = TokenRateDayAvg.load(dayID.toString())
  if (entity === null) {
    entity = new TokenRateDayAvg(dayID.toString())
    entity.date = dayStartTimestamp
    entity.dailyAvgRate = event.params.rate
  }

  entity.dailyAvgRate = entity.dailyAvgRate.plus(event.params.rate).div(BigInt.fromI32(2))

  entity.save()
}
