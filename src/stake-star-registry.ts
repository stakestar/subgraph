import { log, store } from '@graphprotocol/graph-ts'
import {
  AddOperatorToAllowList as AddOperatorToAllowListEvent,
  RemoveOperatorFromAllowList as RemoveOperatorFromAllowListEvent
} from "../generated/StakeStarRegistry/StakeStarRegistry"
import {
  Operator
} from "../generated/schema"

export function handleAddOperatorToAllowList(
  event: AddOperatorToAllowListEvent
): void {
  const operatorId = event.params.operatorId
  if (Operator.load(operatorId.toString()) !== null) {
    log.warning("Operator {} is in allow list", [operatorId.toString()])
    return
  }

  const entity = new Operator(operatorId.toString())

  entity.save()
}

export function handleRemoveOperatorFromAllowList(
  event: RemoveOperatorFromAllowListEvent
): void {
  const operatorId = event.params.operatorId
  if (Operator.load(operatorId.toString()) === null) {
    log.warning("Operator {} is not in allow list", [operatorId.toString()])
    return
  }

  store.remove('Operator', operatorId.toString())
}
