import { log, store } from '@graphprotocol/graph-ts'
import {
  AddOperatorToAllowList as AddOperatorToAllowListEvent,
  RemoveOperatorFromAllowList as RemoveOperatorFromAllowListEvent
} from "../generated/StakeStarRegistry/StakeStarRegistry"
import {
  OperatorAllowList
} from "../generated/schema"

export function handleAddOperatorToAllowList(
  event: AddOperatorToAllowListEvent
): void {
  const operatorId = event.params.operatorId
  if (OperatorAllowList.load(operatorId.toString()) !== null) {
    log.warning("Operator {} is in allow list", [operatorId.toString()])
    return
  }

  const entity = new OperatorAllowList(operatorId.toString())
  entity.operatorId = event.params.operatorId

  entity.save()
}

export function handleRemoveOperatorFromAllowList(
  event: RemoveOperatorFromAllowListEvent
): void {
  const operatorId = event.params.operatorId
  if (OperatorAllowList.load(operatorId.toString()) === null) {
    log.warning("Operator {} is not in allow list", [operatorId.toString()])
    return
  }

  store.remove('OperatorAllowList', operatorId.toString())
}
