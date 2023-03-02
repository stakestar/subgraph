import {
  assert,
  test,
  clearStore,
  createMockedFunction
} from "matchstick-as/assembly/index"
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { handleTransfer } from "../src/stake-star-eth"
import { createTransferEvent } from "./stake-star-eth-utils"
import { StakerAtMomentRate } from "../generated/schema"
const defaultAddress = Address.fromString("0xA16081F360e3847006dB660bae1c6d1b2e17eC2A")

test("Transfer events", () => {
  const fromAddress = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566092")
  const toAddress = Address.fromString("0x1234568e888922556c47d0365AA31BD32f566093")
  const toAddress2 = Address.fromString("0x9876548e888922556c47d0365AA31BD32f566094")

  const rate = BigInt.fromI32(20000)
  const amount = BigInt.fromI32(123)
  const timestamp = BigInt.fromI32(1662041524)

  const stakerAtMomentRate = new StakerAtMomentRate(fromAddress.toHexString())
  stakerAtMomentRate.atMomentRate = rate
  stakerAtMomentRate.date = timestamp.toI32()
  stakerAtMomentRate.save()

  createMockedFunction(defaultAddress, 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(toAddress)])
    .returns([ethereum.Value.fromI32(amount.toI32())])

    createMockedFunction(defaultAddress, 'balanceOf', 'balanceOf(address):(uint256)')
    .withArgs([ethereum.Value.fromAddress(toAddress2)])
    .returns([ethereum.Value.fromI32(amount.toI32())])

  handleTransfer(createTransferEvent(fromAddress, toAddress, amount, timestamp))

  assert.entityCount("StakerAtMomentRate", 2)

  assert.fieldEquals(
    "StakerAtMomentRate",
    toAddress.toHexString(),
    "atMomentRate",
    rate.toString()
  )

  clearStore()
})
