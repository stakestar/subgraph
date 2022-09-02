import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  AddOperatorToAllowList,
  RemoveOperatorFromAllowList
} from "../generated/StakeStarRegistry/StakeStarRegistry"

export function createAddOperatorToAllowListEvent(
  operatorId: BigInt
): AddOperatorToAllowList {
  let addOperatorToAllowListEvent = changetype<AddOperatorToAllowList>(
    newMockEvent()
  )

  addOperatorToAllowListEvent.parameters = new Array()

  addOperatorToAllowListEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )

  return addOperatorToAllowListEvent
}

export function createRemoveOperatorFromAllowListEvent(
  operatorId: BigInt
): RemoveOperatorFromAllowList {
  let removeOperatorFromAllowListEvent = changetype<
    RemoveOperatorFromAllowList
  >(newMockEvent())

  removeOperatorFromAllowListEvent.parameters = new Array()

  removeOperatorFromAllowListEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )

  return removeOperatorFromAllowListEvent
}
