import {
  assert,
  test,
  clearStore
} from "matchstick-as/assembly/index"
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { handlePullEvent } from "../src/stake-star-rewards"
import { createPullEvent } from "./stake-star-rewards-utils"
import { DEFAULT_ID } from "../src/consts"
const address = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092")

test("Pull events emited", () => {
  const timestamp = BigInt.fromI32(1662041524)
  const dayID = timestamp.div(BigInt.fromI32(86400))
  const amount1 = BigInt.fromI32(123)

  handlePullEvent(createPullEvent(address, amount1, timestamp))

  assert.entityCount("StakeStarRewardsDaily", 1)

  assert.fieldEquals(
    "StakeStarRewardsDaily",
    dayID.toString(),
    "rewards",
    amount1.toString()
  )

  assert.entityCount("StakeStarRewardsTotal", 1)

  assert.fieldEquals(
    "StakeStarRewardsTotal",
    DEFAULT_ID,
    "rewards",
    amount1.toString()
  )

  const amount2 = BigInt.fromI32(300)

  handlePullEvent(createPullEvent(address, amount2, timestamp.plus(BigInt.fromI32(1000))))

  assert.entityCount("StakeStarRewardsDaily", 1)

  assert.fieldEquals(
    "StakeStarRewardsDaily",
    dayID.toString(),
    "rewards",
    amount1.plus(amount2).toString()
  )

  assert.entityCount("StakeStarRewardsTotal", 1)

  assert.fieldEquals(
    "StakeStarRewardsTotal",
    DEFAULT_ID,
    "rewards",
    amount1.plus(amount2).toString()
  )

  const nextDayTimestamp = timestamp.plus(BigInt.fromI32(86900))
  const nextDayID = nextDayTimestamp.div(BigInt.fromI32(86400))

  const amount3 = BigInt.fromI32(400)

  handlePullEvent(createPullEvent(address, amount3, nextDayTimestamp))

  assert.entityCount("StakeStarRewardsDaily", 2)

  assert.fieldEquals(
    "StakeStarRewardsDaily",
    nextDayID.toString(),
    "rewards",
    amount1.plus(amount2).plus(amount3).toString()
  )

  assert.entityCount("StakeStarRewardsTotal", 1)

  assert.fieldEquals(
    "StakeStarRewardsTotal",
    DEFAULT_ID,
    "rewards",
    amount1.plus(amount2).plus(amount3).toString()
  )

  clearStore()
})
