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
  StakerAtMomentRate
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"
import { weightedAverage } from "./utils"
import { log } from "matchstick-as/assembly/log";

export function handleUpdateRate(event: UpdateRateEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400
  let entity = TokenRateDaily.load(dayID.toString())
  if (entity === null) {
    entity = new TokenRateDaily(dayID.toString())
    entity.date = dayStartTimestamp
  }

  entity.rate = event.params.rate

  entity.save()
}

function saveStakeStarTvl(event: MintEvent): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400

  const prevDayTimestamp = timestamp - 86400
  const prevDayID = prevDayTimestamp / 86400

  let prevDayEntity = StakeStarTvl.load(prevDayID.toString())
  let prevDayTotalETH = BigInt.fromI32(0)
  if (prevDayEntity !== null) {
    prevDayTotalETH = prevDayEntity.totalETH
  }

  let entity = StakeStarTvl.load(dayID.toString())
  if (entity === null) {
    entity = new StakeStarTvl(dayID.toString())
    entity.date = dayStartTimestamp
    entity.totalETH = prevDayTotalETH
  }

  entity.totalETH = entity.totalETH.plus(event.params.ssETH)

  entity.save()
}

function saveStakerAtMomentRate(event: MintEvent): void {
  const stakerAddress = event.params.to
  const timestamp = event.block.timestamp.toI32()

  const stakeStarETH = StakeStarETH.bind(event.address)
  const balance = stakeStarETH.balanceOf(stakerAddress)
  const rate = event.params.rate

  let stakerAtMomentRate = StakerAtMomentRate.load(stakerAddress.toString())

  if (balance.equals(new BigInt(0))) {
    log.error("Zero balance on mint event for address", [stakerAddress.toString()])
    return
  }

  if (stakerAtMomentRate === null || balance.minus(event.params.ssETH).equals(new BigInt(0))) {
    stakerAtMomentRate = new StakerAtMomentRate(stakerAddress.toString())
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

  const stakerAtMomentRateFrom = StakerAtMomentRate.load(fromAddress.toString())

  if (stakerAtMomentRateFrom === null) {
    log.error("There is no StakerAtMomentRate entity for address", [fromAddress.toString()])
    return
  }

  const toAddress = event.params.to
  const amount = event.params.value
  const stakeStarETH = StakeStarETH.bind(event.address)
  const balance = stakeStarETH.balanceOf(toAddress)

  let stakerAtMomentRateTo = StakerAtMomentRate.load(toAddress.toString())

  if (stakerAtMomentRateTo === null || balance.minus(amount).equals(new BigInt(0))) {
    stakerAtMomentRateTo = new StakerAtMomentRate(toAddress.toString())
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