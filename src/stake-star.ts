import { Address, BigInt, dataSource, log, store } from '@graphprotocol/graph-ts'
import {
  CreateValidator as CreateValidatorEvent,
  Stake as StakeEvent,
  Unstake as UnstakeEvent,
  StakeStar,
  CommitSnapshot,
  DestroyValidator
} from "../generated/StakeStar/StakeStar"
import {
  SnapshotCommit,
  StakeStarTvl,
  StakeStarTvlTotal,
  StakerAtMomentRate,
  TokenRate,
  TokenRateDaily,
  Validator
} from "../generated/schema"
import { DEFAULT_ID } from './consts'
import { stakeStarAddress, sstarETHAddress } from './generated-consts'
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
  entity.createdAt = event.block.timestamp.toI32()

  entity.save()
}

export function handleDestroyValidator(
  event: DestroyValidator
): void {
  const publicKey = event.params.publicKey
  const entity = Validator.load(publicKey.toHexString())
  if (entity === null) {
    log.warning("Validator {} is not registered", [publicKey.toHexString()])
    return
  }

  entity.destroyedAt = event.block.timestamp.toI32()

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

  let snapshotCommit = SnapshotCommit.load(event.transaction.hash)
  if (snapshotCommit === null) {
    snapshotCommit = new SnapshotCommit(event.transaction.hash)

    snapshotCommit.sender = event.transaction.from
    snapshotCommit.total_ETH = event.params.total_ETH
    snapshotCommit.total_sstarETH = event.params.total_stakedStar
    snapshotCommit.timestamp = event.params.timestamp.toI32()
    snapshotCommit.rate = event.params.rate

    snapshotCommit.save()
  }
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

  entity.totalETH = entity.totalETH.plus(event.params.starETH)
  stakeStarTotalTvl.totalETH = stakeStarTotalTvl.totalETH.plus(event.params.starETH)

  entity.save()
  stakeStarTotalTvl.save()
}

function saveStakerAtMomentRate(event: StakeEvent): void {
  const stakerAddress = event.params.who
  const timestamp = event.block.timestamp.toI32()

  const ssETH = StakeStarETH.bind(Address.fromString(sstarETHAddress))
  const balance = ssETH.balanceOf(stakerAddress)

  const stakeStar = StakeStar.bind(Address.fromString(stakeStarAddress))
  const rate = stakeStar.rate()

  let stakerAtMomentRate = StakerAtMomentRate.load(stakerAddress.toHexString())

  if (balance.equals(new BigInt(0))) {
    log.error("Zero balance on mint event for address", [stakerAddress.toHexString()])
    return
  }

  if (stakerAtMomentRate === null || balance.minus(event.params.sstarETH).equals(new BigInt(0))) {
    stakerAtMomentRate = new StakerAtMomentRate(stakerAddress.toHexString())
    stakerAtMomentRate.atMomentRate = rate
    stakerAtMomentRate.date = timestamp
    stakerAtMomentRate.save()

    return
  }

  stakerAtMomentRate.atMomentRate = weightedAverage([stakerAtMomentRate.atMomentRate, rate], [balance.minus(event.params.sstarETH), event.params.sstarETH])
  stakerAtMomentRate.date = timestamp
  stakerAtMomentRate.save()
}

export function handleUnstake(
  event: UnstakeEvent
): void {
  const timestamp = event.block.timestamp.toI32()
  const dayID = timestamp / 86400
  const dayStartTimestamp = dayID * 86400

  let stakeStarTotalTvl = StakeStarTvlTotal.load(DEFAULT_ID)

  if (stakeStarTotalTvl === null) {
    log.error("StakeStarTvlTotal is null", [])
    return
  }

  const totalTvl = stakeStarTotalTvl.totalETH

  let entity = StakeStarTvl.load(dayID.toString())
  if (entity === null) {
    entity = new StakeStarTvl(dayID.toString())
    entity.date = dayStartTimestamp
    entity.totalETH = totalTvl
  }

  entity.totalETH = entity.totalETH.minus(event.params.starETH)
  stakeStarTotalTvl.totalETH = stakeStarTotalTvl.totalETH.minus(event.params.starETH)

  entity.save()
  stakeStarTotalTvl.save()
}