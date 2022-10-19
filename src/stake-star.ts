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
  if (Validator.load(publicKey.toString()) !== null) {
    log.warning("Validator {} is already registered", [publicKey.toString()])
    return
  }

  const entity = new Validator(publicKey.toString())

  entity.save()
}
