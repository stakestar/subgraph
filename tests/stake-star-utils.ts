import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Stake, Unstake, CommitSnapshot
} from "../generated/StakeStar/StakeStar"

export function createStakeEvent(staker: Address, starETH: BigInt, sstarETH: BigInt, timestamp: BigInt): Stake {
  const event = changetype<Stake>(newMockEvent())

  event.parameters = []

  event.block.timestamp = timestamp

  event.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromAddress(staker))
  )
  event.parameters.push(
    new ethereum.EventParam("starETH", ethereum.Value.fromUnsignedBigInt(starETH))
  )

  event.parameters.push(
    new ethereum.EventParam("sstarETH", ethereum.Value.fromUnsignedBigInt(sstarETH))
  )

  return event
}

export function createUnstakeEvent(staker: Address, starETH: BigInt, sstarETH: BigInt, timestamp: BigInt): Unstake {
  const event = changetype<Unstake>(newMockEvent())

  event.parameters = []

  event.block.timestamp = timestamp

  event.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromAddress(staker))
  )
  event.parameters.push(
    new ethereum.EventParam("sstarETH", ethereum.Value.fromUnsignedBigInt(sstarETH))
  )
  event.parameters.push(
    new ethereum.EventParam("starETH", ethereum.Value.fromUnsignedBigInt(starETH))
  )

  return event
}

export function createCommitSnapshotEvent(total_ETH: BigInt, total_sstarETH: BigInt, rate: BigInt, timestamp: BigInt): CommitSnapshot {
  const event = changetype<CommitSnapshot>(newMockEvent())

  event.parameters = []

  event.block.timestamp = timestamp

  event.parameters.push(
    new ethereum.EventParam("total_ETH", ethereum.Value.fromUnsignedBigInt(total_ETH))
  )
  event.parameters.push(
    new ethereum.EventParam("total_sstarETH", ethereum.Value.fromUnsignedBigInt(total_sstarETH))
  )
  event.parameters.push(
    new ethereum.EventParam("timestamp", ethereum.Value.fromUnsignedBigInt(timestamp))
  )
  event.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return event
}