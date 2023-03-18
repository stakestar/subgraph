import {
   StakeStarETH,
   Transfer
} from "../generated/StakeStarETH/StakeStarETH"
import {
  StakerAtMomentRate
} from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"
import { weightedAverage } from "./utils"
import { log } from "matchstick-as/assembly/log"
import { ZERO_ADDR } from "./consts"

export function handleTransfer(event: Transfer): void {
  const timestamp = event.block.timestamp.toI32()
  const fromAddress = event.params.from

  if (fromAddress.toHexString() === ZERO_ADDR) {
    return
  }

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