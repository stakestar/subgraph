import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Transfer
} from "../generated/StakeStarETH/StakeStarETH"

export function createTransferEvent(from: Address, to: Address, value: BigInt, timestamp: BigInt): Transfer {
  const transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = []

  transferEvent.block.timestamp = timestamp

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
