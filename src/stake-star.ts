import { Address, BigInt, dataSource, log, store } from '@graphprotocol/graph-ts'
import {
  CreateValidator as CreateValidatorEvent,
  Stake as StakeEvent,
  Unstake as UnstakeEvent,
  StakeStar,
  CommitSnapshot
} from "../generated/StakeStar/StakeStar"
import {
  StakeStarTvl,
  StakeStarTvlTotal,
  StakerAtMomentRate,
  TokenRate,
  TokenRateDaily,
  Validator
} from "../generated/schema"
import { DEFAULT_ID } from './consts'
import { stakeStarAddress, stakeStarETHAddress } from './generated-consts'
import { StakeStarETH } from '../generated/StakeStarETH/StakeStarETH'
import { weightedAverage } from './utils'

export function handleCreateValidator(
  event: CreateValidatorEvent
): void {
  const publicKey = event.params.params.publicKey
  if (Validator.load(publicKey.toHexString()) !== null) {
    log.warning("Validator {} is already registered", [publicKey.toHexString()])
    return
  }

  const entity = new Validator(publicKey.toHexString())
  entity.crearedAt = event.block.timestamp

  entity.save()
}

export function handleCommitSnapshot(
  event: CommitSnapshot
): void {
  const timestamp = event.params.timestamp
  const dayID = timestamp.div(BigInt.fromI32(86400)).toI32()
  let entity = TokenRateDaily.load(dayID.toString())
  if (entity === null) {
    entity = new TokenRateDaily(dayID.toString())
    entity.date = timestamp.toI32()
  }

  entity.rate = event.params.rate
  entity.date = timestamp.toI32()

  entity.save()

  // Save each rate
  let tokenRate = TokenRate.load(timestamp.toString())
  if (tokenRate === null) {
    tokenRate = new TokenRate(timestamp.toString())
  }

  tokenRate.rate = event.params.rate
  tokenRate.save()
}

export function handleStake(
  event: StakeEvent
): void {
  saveStakeStarTvl(event)
  saveStakerAtMomentRate(event)
}

function saveStakeStarTvl(event: StakeEvent): void {
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

  entity.totalETH = entity.totalETH.plus(event.params.eth)
  stakeStarTotalTvl.totalETH = stakeStarTotalTvl.totalETH.plus(event.params.eth)

  entity.save()
  stakeStarTotalTvl.save()
}

function saveStakerAtMomentRate(event: StakeEvent): void {
  const stakerAddress = event.params.who
  const timestamp = event.block.timestamp.toI32()

  const stakeStarETH = StakeStarETH.bind(Address.fromString(stakeStarETHAddress))
  const balance = stakeStarETH.balanceOf(stakerAddress)

  const stakeStar = StakeStar.bind(Address.fromString(stakeStarAddress))
  const rate = stakeStar.rate()

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

export function handleUnstake(
  event: UnstakeEvent
): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400

  let stakeStarTotalTvl = StakeStarTvlTotal.load(DEFAULT_ID)

  let entity = StakeStarTvl.load(dayID.toString())

  if (stakeStarTotalTvl === null || entity === null) {
    log.info("StakeStarTvlTotal or StakeStarTvl is null", [])
    return
  }

  entity.totalETH = entity.totalETH.minus(event.params.eth)
  stakeStarTotalTvl.totalETH = stakeStarTotalTvl.totalETH.minus(event.params.eth)

  entity.save()
  stakeStarTotalTvl.save()
}