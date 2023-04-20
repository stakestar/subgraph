import {
  Proposed
} from '../generated/StakeStarOracleStrict/StakeStarOracleStrict'
import {
  Propose
} from '../generated/schema'

export function handleProposed(
  event: Proposed
): void {
  let propose = Propose.load(event.transaction.hash)
  if (propose === null) {
    propose = new Propose(event.transaction.hash)

    propose.sender = event.transaction.from
    propose.epoch = event.params.epoch
    propose.totalBalance = event.params.totalBalance
    propose.oracleBit = event.params.oracleBit
    propose.timestamp = event.block.timestamp

    propose.save()
  }
}
