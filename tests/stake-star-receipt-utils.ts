import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  StakeStarReceiptUpdateRate
} from "../generated/StakeStarReceipt/StakeStarReceipt"

export function createUpdateRateEvent(rate: BigInt, timestamp: BigInt): StakeStarReceiptUpdateRate {
  const updateRateEvent = changetype<StakeStarReceiptUpdateRate>(newMockEvent())

  updateRateEvent.parameters = []

  updateRateEvent.block.timestamp = timestamp

  updateRateEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return updateRateEvent
}
