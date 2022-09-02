import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { OperatorAllowList } from "../generated/schema"
import { 
  AddOperatorToAllowList as AddOperatorToAllowListEvent,
  RemoveOperatorFromAllowList as RemoveOperatorFromAllowListEvent
 } from "../generated/StakeStarRegistry/StakeStarRegistry"
import { handleAddOperatorToAllowList, handleRemoveOperatorFromAllowList } from "../src/stake-star-registry"
import { createAddOperatorToAllowListEvent, createRemoveOperatorFromAllowListEvent } from "./stake-star-registry-utils"

test("Add and remove operators", () => {
  const operatorId1 = BigInt.fromI32(1)
  handleAddOperatorToAllowList(createAddOperatorToAllowListEvent(operatorId1))

  assert.entityCount("OperatorAllowList", 1)

  assert.fieldEquals(
    "OperatorAllowList",
    operatorId1.toString(),
    "operatorId",
    operatorId1.toString()
  )

  const operatorId2 = BigInt.fromI32(2)
  handleAddOperatorToAllowList(createAddOperatorToAllowListEvent(operatorId2))

  assert.entityCount("OperatorAllowList", 2)

  assert.fieldEquals(
    "OperatorAllowList",
    operatorId2.toString(),
    "operatorId",
    operatorId2.toString()
  )

  handleRemoveOperatorFromAllowList(createRemoveOperatorFromAllowListEvent(operatorId1))

  assert.entityCount("OperatorAllowList", 1)

  clearStore()
})
