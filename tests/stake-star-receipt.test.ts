import {
  assert,
  test,
  clearStore
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { handleUpdateRate } from "../src/stake-star-receipt"
import { createUpdateRateEvent } from "./stake-star-receipt-utils"


test("Stake events emited", () => {
  const timestamp = BigInt.fromI32(1662041524)
  const rate1 = BigInt.fromI32(100000)
  handleUpdateRate(createUpdateRateEvent(rate1, timestamp))
  const dayID = timestamp.div(BigInt.fromI32(86400))

  assert.entityCount("TokenRateDaily", 1)

  assert.fieldEquals(
    "TokenRateDaily",
    dayID.toString(),
    "rate",
    rate1.toString()
  )

  const rate2 = BigInt.fromI32(200000)
  handleUpdateRate(createUpdateRateEvent(rate2, timestamp.plus(BigInt.fromI32(1000))))

  assert.entityCount("TokenRateDaily", 1)

  assert.fieldEquals(
    "TokenRateDaily",
    dayID.toString(),
    "rate",
    rate2.toString()
  )

  const rate3 = BigInt.fromI32(300000)
  const nextDayTimestamp = timestamp.plus(BigInt.fromI32(86900))
  const nextDayID = nextDayTimestamp.div(BigInt.fromI32(86400))

  handleUpdateRate(createUpdateRateEvent(rate3, nextDayTimestamp))

  assert.entityCount("TokenRateDaily", 2)

  assert.fieldEquals(
    "TokenRateDaily",
    nextDayID.toString(),
    "rate",
    rate3.toString()
  )

  clearStore()
})
