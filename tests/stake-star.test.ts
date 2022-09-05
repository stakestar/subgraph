import {
  assert,
  test,
  clearStore
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { handleStake } from "../src/stake-star"
import { createStakeEvent } from "./stake-star-utils"
import { STAKESTAR_ADDRESS } from "../src/addresses"

test("Stake events emited", () => {
  const timestamp = BigInt.fromI32(1662041524)
  const dayID = timestamp.div(BigInt.fromI32(86400))
  handleStake(createStakeEvent(Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092"), BigInt.fromI32(123), timestamp))

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    dayID.toString(),
    "totalETH",
    "123"
  )

  handleStake(createStakeEvent(Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092"), BigInt.fromI32(123), timestamp.plus(BigInt.fromI32(1000))))

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    dayID.toString(),
    "totalETH",
    "246"
  )

  const nextDayTimestamp = timestamp.plus(BigInt.fromI32(86900))
  const nextDayID = nextDayTimestamp.div(BigInt.fromI32(86400))

  handleStake(createStakeEvent(Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092"), BigInt.fromI32(123), nextDayTimestamp))

  assert.entityCount("StakeStarTvl", 2)

  assert.fieldEquals(
    "StakeStarTvl",
    nextDayID.toString(),
    "totalETH",
    "369"
  )

  clearStore()
})