import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Pull
} from "../generated/StakeStarRewards/StakeStarRewards"

export function createPullEvent(address: Address, amount: BigInt, timestamp: BigInt): Pull {
  const pullEvent = changetype<Pull>(newMockEvent())

  pullEvent.parameters = []

  pullEvent.block.timestamp = timestamp

  pullEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(address))
  )
  pullEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return pullEvent
}
