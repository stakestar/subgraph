import { log, store } from '@graphprotocol/graph-ts'
import {
  CreateValidator as CreateValidatorEvent,
} from "../generated/StakeStar/StakeStar"
import {
  Validator
} from "../generated/schema"

export function handleCreateValidator(
  event: CreateValidatorEvent
): void {
  const publicKey = event.params.params.publicKey
  if (Validator.load(publicKey.toHexString()) !== null) {
    log.warning("Validator {} is already registered", [publicKey.toHexString()])
    return
  }

  const entity = new Validator(publicKey.toHexString())

  entity.save()
}
