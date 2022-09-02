import {
  StakeStarReceiptUpdateRate as StakeStarReceiptUpdateRateEvent
} from "../generated/StakeStarReceipt/StakeStarReceipt"
import {
  TokenRateDaily
} from "../generated/schema"

export function handleUpdateRate(event: StakeStarReceiptUpdateRateEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400
  let entity = TokenRateDaily.load(dayID.toString())
  if (entity === null) {
    entity = new TokenRateDaily(dayID.toString())
    entity.date = dayStartTimestamp
  }

  entity.rate = event.params.rate

  entity.save()
}
