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
  handleStake(createStakeEvent(Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092"), BigInt.fromI32(123)))

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    STAKESTAR_ADDRESS,
    "totalETH",
    "123"
  )

  handleStake(createStakeEvent(Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092"), BigInt.fromI32(123)))

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    STAKESTAR_ADDRESS,
    "totalETH",
    "246"
  )

  clearStore()
})