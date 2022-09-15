import {
  assert,
  test,
  clearStore,
  createMockedFunction
} from "matchstick-as/assembly/index"
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { handleUpdateRate, handleMint, handleTransfer } from "../src/stake-star-eth"
import { createUpdateRateEvent, createMintEvent, createTransferEvent } from "./stake-star-eth-utils"
import { weightedAverage } from "../src/utils"
import { StakerAtMomentRate } from "../generated/schema"
import { logStore } from 'matchstick-as/assembly/store'
const defaultAddress = Address.fromString("0xA16081F360e3847006dB660bae1c6d1b2e17eC2A")
const staker = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092")

test("Mint events emited", () => {
  const timestamp = BigInt.fromI32(1662041524)
  const dayID = timestamp.div(BigInt.fromI32(86400))
  const amount1 = BigInt.fromI32(123)
  const rate1 = BigInt.fromI32(20000)

  createMockedFunction(defaultAddress, 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(staker)])
    .returns([ethereum.Value.fromI32(amount1.toI32())])

  handleMint(createMintEvent(staker, amount1, rate1, timestamp))

  assert.entityCount("StakerAtMomentRate", 1)

  assert.fieldEquals(
    "StakerAtMomentRate",
    staker.toHexString(),
    "atMomentRate",
    rate1.toString()
  )

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    dayID.toString(),
    "totalETH",
    amount1.toString()
  )

  const amount2 = BigInt.fromI32(300)
  const rate2 = BigInt.fromI32(30000)

  createMockedFunction(defaultAddress, 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(staker)])
    .returns([ethereum.Value.fromI32(amount1.plus(amount2).toI32())])

  handleMint(createMintEvent(staker, amount2, rate2, timestamp.plus(BigInt.fromI32(1000))))

  assert.entityCount("StakerAtMomentRate", 1)

  assert.fieldEquals(
    "StakerAtMomentRate",
    staker.toHexString(),
    "atMomentRate",
    weightedAverage(
      [rate1, rate2],
      [amount1, amount2]
    ).toString()
  )

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    dayID.toString(),
    "totalETH",
    amount1.plus(amount2).toString()
  )

  const nextDayTimestamp = timestamp.plus(BigInt.fromI32(86900))
  const nextDayID = nextDayTimestamp.div(BigInt.fromI32(86400))

  const amount3 = BigInt.fromI32(400)
  const rate3 = BigInt.fromI32(40000)

  handleMint(createMintEvent(staker, amount3, rate3, nextDayTimestamp))

  assert.entityCount("StakeStarTvl", 2)

  assert.fieldEquals(
    "StakeStarTvl",
    nextDayID.toString(),
    "totalETH",
    amount1.plus(amount2).plus(amount3).toString()
  )

  clearStore()
})

test("Transfer events", () => {
  const fromAddress = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092")
  const toAddress = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566093")
  const toAddress2 = Address.fromString("0x9876548e888922556c47d0365AA31BD32f566094")

  const rate = BigInt.fromI32(20000)
  const amount = BigInt.fromI32(123)
  const timestamp = BigInt.fromI32(1662041524)

  const stakerAtMomentRate = new StakerAtMomentRate(fromAddress.toHexString())
  stakerAtMomentRate.atMomentRate = rate
  stakerAtMomentRate.date = timestamp.toI32()
  stakerAtMomentRate.save()

  createMockedFunction(defaultAddress, 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(toAddress)])
    .returns([ethereum.Value.fromI32(amount.toI32())])

    createMockedFunction(defaultAddress, 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(toAddress2)])
    .returns([ethereum.Value.fromI32(amount.toI32())])

  handleTransfer(createTransferEvent(fromAddress, toAddress, amount, timestamp))

  assert.entityCount("StakerAtMomentRate", 2)

  assert.fieldEquals(
    "StakerAtMomentRate",
    toAddress.toHexString(),
    "atMomentRate",
    rate.toString()
  )

  clearStore()
})

test("Update rates", () => {
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
