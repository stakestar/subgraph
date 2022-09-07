import {
  assert,
  test,
  clearStore
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { handleAddOperatorToAllowList, handleRemoveOperatorFromAllowList } from "../src/stake-star-registry"
import { createAddOperatorToAllowListEvent, createRemoveOperatorFromAllowListEvent } from "./stake-star-registry-utils"

test("Add and remove operators", () => {
  const operatorId1 = BigInt.fromI32(1)
  handleAddOperatorToAllowList(createAddOperatorToAllowListEvent(operatorId1))

  assert.entityCount("OperatorAllowList", 1)

  assert.fieldEquals(
    "OperatorAllowList",
    operatorId1.toString(),
    "id",
    operatorId1.toString()
  )

  const operatorId2 = BigInt.fromI32(2)
  handleAddOperatorToAllowList(createAddOperatorToAllowListEvent(operatorId2))

  assert.entityCount("OperatorAllowList", 2)

  assert.fieldEquals(
    "OperatorAllowList",
    operatorId2.toString(),
    "id",
    operatorId2.toString()
  )

  handleRemoveOperatorFromAllowList(createRemoveOperatorFromAllowListEvent(operatorId1))

  assert.entityCount("OperatorAllowList", 1)

  clearStore()
})
