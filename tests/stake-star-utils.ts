import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Stake, Unstake, CommitSnapshot
} from "../generated/StakeStar/StakeStar"

export function createStakeEvent(staker: Address, eth: BigInt, ssEth: BigInt, timestamp: BigInt): Stake {
  const event = changetype<Stake>(newMockEvent())

  event.parameters = []

  event.block.timestamp = timestamp

  event.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromAddress(staker))
  )
  event.parameters.push(
    new ethereum.EventParam("eth", ethereum.Value.fromUnsignedBigInt(eth))
  )

  event.parameters.push(
    new ethereum.EventParam("ssETH", ethereum.Value.fromUnsignedBigInt(ssEth))
  )

  return event
}

export function createUnstakeEvent(staker: Address, eth: BigInt, ssEth: BigInt, timestamp: BigInt): Unstake {
  const event = changetype<Unstake>(newMockEvent())

  event.parameters = []

  event.block.timestamp = timestamp

  event.parameters.push(
    new ethereum.EventParam("who", ethereum.Value.fromAddress(staker))
  )
  event.parameters.push(
    new ethereum.EventParam("eth", ethereum.Value.fromUnsignedBigInt(eth))
  )

  event.parameters.push(
    new ethereum.EventParam("ssETH", ethereum.Value.fromUnsignedBigInt(ssEth))
  )

  return event
}

export function createCommitSnapshotEvent(total_ETH: BigInt, total_ssETH: BigInt, rate: BigInt, timestamp: BigInt): CommitSnapshot {
  const event = changetype<CommitSnapshot>(newMockEvent())

  event.parameters = []

  event.block.timestamp = timestamp

  event.parameters.push(
    new ethereum.EventParam("total_ETH", ethereum.Value.fromUnsignedBigInt(total_ETH))
  )
  event.parameters.push(
    new ethereum.EventParam("total_ssETH", ethereum.Value.fromUnsignedBigInt(total_ssETH))
  )
  event.parameters.push(
    new ethereum.EventParam("timestamp", ethereum.Value.fromUnsignedBigInt(timestamp))
  )
  event.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return event
}