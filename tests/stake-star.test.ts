import {
  assert,
  test,
  clearStore,
  createMockedFunction
} from "matchstick-as/assembly/index"
import { Address, BigInt, ethereum, log } from "@graphprotocol/graph-ts"
import { handleCommitSnapshot, handleStake, handleUnstake } from "../src/stake-star"
import { createCommitSnapshotEvent, createStakeEvent, createUnstakeEvent } from "./stake-star-utils"
import { weightedAverage } from "../src/utils"
import { stakeStarAddress, sstarETHAddress } from '../src/generated-consts'

const staker = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092")

test("Stake and unstake events emited", () => {
  const timestamp = BigInt.fromI32(1662041524)
  const dayID = timestamp.div(BigInt.fromI32(86400))
  const amountEth1 = BigInt.fromI32(123)
  const amountSsEth1 = BigInt.fromI32(123)
  const rate1 = amountEth1.div(amountSsEth1)

  createMockedFunction(Address.fromString(sstarETHAddress), 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(staker)])
    .returns([ethereum.Value.fromI32(amountSsEth1.toI32())])

  createMockedFunction(Address.fromString(stakeStarAddress), 'rate', 'rate():(uint256)')
    .returns([ethereum.Value.fromI32(rate1.toI32())])

  handleStake(createStakeEvent(staker, amountSsEth1, amountSsEth1, timestamp))

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
    amountEth1.toString()
  )

  const amountEth2 = BigInt.fromI32(300)
  const amountSsEth2 = BigInt.fromI32(400)

  const amountEthSum1 = amountEth1.plus(amountEth2)
  const amountSsEthSum2 = amountSsEth1.plus(amountSsEth2)

  const rate2 = amountEthSum1.div(amountSsEthSum2)

  createMockedFunction(Address.fromString(sstarETHAddress), 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(staker)])
    .returns([ethereum.Value.fromI32(amountEthSum1.toI32())])

  createMockedFunction(Address.fromString(stakeStarAddress), 'rate', 'rate():(uint256)')
    .returns([ethereum.Value.fromI32(rate2.toI32())])

  handleStake(createStakeEvent(staker, amountEth2, amountSsEth2, timestamp.plus(BigInt.fromI32(1000))))

  assert.entityCount("StakerAtMomentRate", 1)

  assert.fieldEquals(
    "StakerAtMomentRate",
    staker.toHexString(),
    "atMomentRate",
    weightedAverage(
      [rate1, rate2],
      [amountSsEth1, amountSsEth2]
    ).toString()
  )

  assert.entityCount("StakeStarTvl", 1)

  assert.fieldEquals(
    "StakeStarTvl",
    dayID.toString(),
    "totalETH",
    amountEthSum1.toString()
  )

  const nextDayTimestamp = timestamp.plus(BigInt.fromI32(86900))
  const nextDayID = nextDayTimestamp.div(BigInt.fromI32(86400))

  const amount3 = BigInt.fromI32(400)
  const rate3 = BigInt.fromI32(40000)
  const sum = amountEth1.plus(amountEth2).plus(amount3)

  handleStake(createStakeEvent(staker, amount3, amount3, nextDayTimestamp))

  assert.entityCount("StakeStarTvl", 2)

  assert.fieldEquals(
    "StakeStarTvl",
    nextDayID.toString(),
    "totalETH",
    sum.toString()
  )

  const unstakeAmount = BigInt.fromI32(200)

  handleUnstake(createUnstakeEvent(staker, unstakeAmount, amount3, nextDayTimestamp.plus(BigInt.fromI32(1000))))

  assert.fieldEquals(
    "StakeStarTvl",
    nextDayID.toString(),
    "totalETH",
    sum.minus(unstakeAmount).toString()
  )

  clearStore()
})

test("Commit snapshots", () => {
  const timestamp = BigInt.fromI32(1662041524)
  const totalEth1 = BigInt.fromI32(1000000)
  const totalSsEth1 = BigInt.fromI32(1000000)
  const rate1 = totalEth1.times(BigInt.fromI32(1000)).div(totalSsEth1)

  handleCommitSnapshot(createCommitSnapshotEvent(totalEth1, totalSsEth1, rate1, timestamp))
  const dayID = timestamp.div(BigInt.fromI32(86400))

  assert.entityCount("TokenRateDaily", 1)

  assert.fieldEquals(
    "TokenRateDaily",
    dayID.toString(),
    "rate",
    rate1.toString()
  )

  const totalEth2 = BigInt.fromI32(2000000)
  const totalSsEth2 = BigInt.fromI32(3000000)
  const rate2 = totalEth2.times(BigInt.fromI32(1000)).div(totalSsEth2)
  handleCommitSnapshot(createCommitSnapshotEvent(totalEth2, totalSsEth2, rate2, timestamp.plus(BigInt.fromI32(1000))))

  assert.entityCount("TokenRateDaily", 1)

  assert.fieldEquals(
    "TokenRateDaily",
    dayID.toString(),
    "rate",
    rate2.toString()
  )

  const nextDayTimestamp = timestamp.plus(BigInt.fromI32(86900))
  const nextDayID = nextDayTimestamp.div(BigInt.fromI32(86400))

  const totalEth3 = BigInt.fromI32(3000000)
  const totalSsEth3 = BigInt.fromI32(3500000)
  const rate3 = totalEth3.times(BigInt.fromI32(1000)).div(totalSsEth3)

  handleCommitSnapshot(createCommitSnapshotEvent(totalEth3, totalSsEth3, rate3, nextDayTimestamp))

  assert.entityCount("TokenRateDaily", 2)

  assert.fieldEquals(
    "TokenRateDaily",
    nextDayID.toString(),
    "rate",
    rate3.toString()
  )

  clearStore()
})
