import {
   UpdateRate as UpdateRateEvent,
   Mint as MintEvent,
   StakeStarETH,
   Burn,
   Transfer
} from "../generated/StakeStarETH/StakeStarETH"
import {
  TokenRateDaily,
  StakeStarTvl,
  StakeStarTvlTotal,
  StakerAtMomentRate,
  TokenRate
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"
import { weightedAverage } from "./utils"
import { log } from "matchstick-as/assembly/log";
import { DEFAULT_ID } from "./consts";

export function handleUpdateRate(event: UpdateRateEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  let entity = TokenRateDaily.load(dayID.toString())
  if (entity === null) {
    entity = new TokenRateDaily(dayID.toString())
    entity.date = timestamp
  }

  entity.rate = event.params.rate

  entity.save()


  // Save each rate
  let tokenRate = TokenRate.load(timestamp.toString())
  if (tokenRate === null) {
    tokenRate = new TokenRate(timestamp.toString())
  }

  tokenRate.rate = event.params.rate
  tokenRate.save()
}

function saveStakeStarTvl(event: MintEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400

  let stakeStarTotalTvl = StakeStarTvlTotal.load(DEFAULT_ID)

  if (stakeStarTotalTvl === null) {
    stakeStarTotalTvl = new StakeStarTvlTotal(DEFAULT_ID)
    stakeStarTotalTvl.totalETH = BigInt.fromI32(0)
  }
  const totalTvl = stakeStarTotalTvl.totalETH

  let entity = StakeStarTvl.load(dayID.toString())
  if (entity === null) {
    entity = new StakeStarTvl(dayID.toString())
    entity.date = dayStartTimestamp
    entity.totalETH = totalTvl
  }

  entity.totalETH = entity.totalETH.plus(event.params.ssETH)
  stakeStarTotalTvl.totalETH = stakeStarTotalTvl.totalETH.plus(event.params.ssETH)

  entity.save()
  stakeStarTotalTvl.save()
}

function saveStakerAtMomentRate(event: MintEvent): void {
  const stakerAddress = event.params.to
  const timestamp = event.block.timestamp.toI32()

  const stakeStarETH = StakeStarETH.bind(event.address)
  const balance = stakeStarETH.balanceOf(stakerAddress)
  const rate = event.params.rate

  let stakerAtMomentRate = StakerAtMomentRate.load(stakerAddress.toHexString())

  if (balance.equals(new BigInt(0))) {
    log.error("Zero balance on mint event for address", [stakerAddress.toHexString()])
    return
  }

  if (stakerAtMomentRate === null || balance.minus(event.params.ssETH).equals(new BigInt(0))) {
    stakerAtMomentRate = new StakerAtMomentRate(stakerAddress.toHexString())
    stakerAtMomentRate.atMomentRate = rate
    stakerAtMomentRate.date = timestamp
    stakerAtMomentRate.save()

    return
  }

  stakerAtMomentRate.atMomentRate = weightedAverage([stakerAtMomentRate.atMomentRate, rate], [balance.minus(event.params.ssETH), event.params.ssETH])
  stakerAtMomentRate.date = timestamp
  stakerAtMomentRate.save()
}

export function handleMint(event: MintEvent): void {
  saveStakeStarTvl(event)
  saveStakerAtMomentRate(event)
}

export function handleBurn(event: Burn): void {

}

export function handleTransfer(event: Transfer): void {
  const timestamp = event.block.timestamp.toI32()
  const fromAddress = event.params.from

  const stakerAtMomentRateFrom = StakerAtMomentRate.load(fromAddress.toHexString())

  if (stakerAtMomentRateFrom === null) {
    log.error("There is no StakerAtMomentRate entity for address", [fromAddress.toHexString()])
    return
  }

  const toAddress = event.params.to
  const amount = event.params.value
  const stakeStarETH = StakeStarETH.bind(event.address)
  const balance = stakeStarETH.balanceOf(toAddress)

  let stakerAtMomentRateTo = StakerAtMomentRate.load(toAddress.toHexString())

  if (stakerAtMomentRateTo === null || balance.minus(amount).equals(new BigInt(0))) {
    stakerAtMomentRateTo = new StakerAtMomentRate(toAddress.toHexString())
    stakerAtMomentRateTo.atMomentRate = stakerAtMomentRateFrom.atMomentRate
    stakerAtMomentRateTo.date = timestamp
    stakerAtMomentRateTo.save()
    return
  }

  stakerAtMomentRateTo.atMomentRate = weightedAverage(
    [stakerAtMomentRateTo.atMomentRate, stakerAtMomentRateFrom.atMomentRate],
    [balance.minus(amount), amount]
    )
  stakerAtMomentRateTo.date = timestamp
  stakerAtMomentRateTo.save()
}