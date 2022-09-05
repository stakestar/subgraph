import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Stake
} from "../generated/StakeStar/StakeStar"

export function createStakeEvent(staker: Address, amount: BigInt, timestamp: BigInt): Stake {
  const stakeEvent = changetype<Stake>(newMockEvent())

  stakeEvent.parameters = []

  stakeEvent.block.timestamp = timestamp

  stakeEvent.parameters.push(
    new ethereum.EventParam("staker", ethereum.Value.fromAddress(staker))
  )
  stakeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakeEvent
}
