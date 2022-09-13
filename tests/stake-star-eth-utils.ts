import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  UpdateRate,
  Mint,
  Transfer
} from "../generated/StakeStarETH/StakeStarETH"

export function createMintEvent(staker: Address, amount: BigInt, rate: BigInt, timestamp: BigInt): Mint {
  const mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = []

  mintEvent.block.timestamp = timestamp

  mintEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(staker))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("ssETH", ethereum.Value.fromUnsignedBigInt(amount))
  )

  mintEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return mintEvent
}

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

export function createUpdateRateEvent(rate: BigInt, timestamp: BigInt): UpdateRate {
  const updateRateEvent = changetype<UpdateRate>(newMockEvent())

  updateRateEvent.parameters = []

  updateRateEvent.block.timestamp = timestamp

  updateRateEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return updateRateEvent
}
