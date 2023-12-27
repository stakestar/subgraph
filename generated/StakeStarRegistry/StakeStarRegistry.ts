// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AddOperatorToAllowList extends ethereum.Event {
  get params(): AddOperatorToAllowList__Params {
    return new AddOperatorToAllowList__Params(this);
  }
}

export class AddOperatorToAllowList__Params {
  _event: AddOperatorToAllowList;

  constructor(event: AddOperatorToAllowList) {
    this._event = event;
  }

  get operatorId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class RemoveOperatorFromAllowList extends ethereum.Event {
  get params(): RemoveOperatorFromAllowList__Params {
    return new RemoveOperatorFromAllowList__Params(this);
  }
}

export class RemoveOperatorFromAllowList__Params {
  _event: RemoveOperatorFromAllowList;

  constructor(event: RemoveOperatorFromAllowList) {
    this._event = event;
  }

  get operatorId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ValidatorStatusChange extends ethereum.Event {
  get params(): ValidatorStatusChange__Params {
    return new ValidatorStatusChange__Params(this);
  }
}

export class ValidatorStatusChange__Params {
  _event: ValidatorStatusChange;

  constructor(event: ValidatorStatusChange) {
    this._event = event;
  }

  get publicKey(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get statusFrom(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get statusTo(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class StakeStarRegistry extends ethereum.SmartContract {
  static bind(address: Address): StakeStarRegistry {
    return new StakeStarRegistry("StakeStarRegistry", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  allowListOfOperators(param0: BigInt): boolean {
    let result = super.call(
      "allowListOfOperators",
      "allowListOfOperators(uint64):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toBoolean();
  }

  try_allowListOfOperators(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowListOfOperators",
      "allowListOfOperators(uint64):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  countValidatorPublicKeys(status: i32): BigInt {
    let result = super.call(
      "countValidatorPublicKeys",
      "countValidatorPublicKeys(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))],
    );

    return result[0].toBigInt();
  }

  try_countValidatorPublicKeys(status: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "countValidatorPublicKeys",
      "countValidatorPublicKeys(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoRAddressList(startIndex: BigInt, endIndex: BigInt): Array<string> {
    let result = super.call(
      "getPoRAddressList",
      "getPoRAddressList(uint256,uint256):(string[])",
      [
        ethereum.Value.fromUnsignedBigInt(startIndex),
        ethereum.Value.fromUnsignedBigInt(endIndex),
      ],
    );

    return result[0].toStringArray();
  }

  try_getPoRAddressList(
    startIndex: BigInt,
    endIndex: BigInt,
  ): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getPoRAddressList",
      "getPoRAddressList(uint256,uint256):(string[])",
      [
        ethereum.Value.fromUnsignedBigInt(startIndex),
        ethereum.Value.fromUnsignedBigInt(endIndex),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  getPoRAddressListLength(): BigInt {
    let result = super.call(
      "getPoRAddressListLength",
      "getPoRAddressListLength():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getPoRAddressListLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPoRAddressListLength",
      "getPoRAddressListLength():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role),
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getValidatorPublicKeys(offset: BigInt, count: BigInt): Array<Bytes> {
    let result = super.call(
      "getValidatorPublicKeys",
      "getValidatorPublicKeys(uint32,uint32):(bytes[])",
      [
        ethereum.Value.fromUnsignedBigInt(offset),
        ethereum.Value.fromUnsignedBigInt(count),
      ],
    );

    return result[0].toBytesArray();
  }

  try_getValidatorPublicKeys(
    offset: BigInt,
    count: BigInt,
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getValidatorPublicKeys",
      "getValidatorPublicKeys(uint32,uint32):(bytes[])",
      [
        ethereum.Value.fromUnsignedBigInt(offset),
        ethereum.Value.fromUnsignedBigInt(count),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getValidatorPublicKeys1(status: i32): Array<Bytes> {
    let result = super.call(
      "getValidatorPublicKeys",
      "getValidatorPublicKeys(uint8):(bytes[])",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))],
    );

    return result[0].toBytesArray();
  }

  try_getValidatorPublicKeys1(status: i32): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getValidatorPublicKeys",
      "getValidatorPublicKeys(uint8):(bytes[])",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getValidatorPublicKeysLength(): BigInt {
    let result = super.call(
      "getValidatorPublicKeysLength",
      "getValidatorPublicKeysLength():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_getValidatorPublicKeysLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getValidatorPublicKeysLength",
      "getValidatorPublicKeysLength():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validatorPublicKeys(param0: BigInt): Bytes {
    let result = super.call(
      "validatorPublicKeys",
      "validatorPublicKeys(uint256):(bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toBytes();
  }

  try_validatorPublicKeys(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "validatorPublicKeys",
      "validatorPublicKeys(uint256):(bytes)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  validatorStatuses(param0: Bytes): i32 {
    let result = super.call(
      "validatorStatuses",
      "validatorStatuses(bytes):(uint8)",
      [ethereum.Value.fromBytes(param0)],
    );

    return result[0].toI32();
  }

  try_validatorStatuses(param0: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "validatorStatuses",
      "validatorStatuses(bytes):(uint8)",
      [ethereum.Value.fromBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  verifyOperators(operatorIds: Array<BigInt>): boolean {
    let result = super.call(
      "verifyOperators",
      "verifyOperators(uint64[]):(bool)",
      [ethereum.Value.fromUnsignedBigIntArray(operatorIds)],
    );

    return result[0].toBoolean();
  }

  try_verifyOperators(
    operatorIds: Array<BigInt>,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyOperators",
      "verifyOperators(uint64[]):(bool)",
      [ethereum.Value.fromUnsignedBigIntArray(operatorIds)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class AddOperatorToAllowListCall extends ethereum.Call {
  get inputs(): AddOperatorToAllowListCall__Inputs {
    return new AddOperatorToAllowListCall__Inputs(this);
  }

  get outputs(): AddOperatorToAllowListCall__Outputs {
    return new AddOperatorToAllowListCall__Outputs(this);
  }
}

export class AddOperatorToAllowListCall__Inputs {
  _call: AddOperatorToAllowListCall;

  constructor(call: AddOperatorToAllowListCall) {
    this._call = call;
  }

  get operatorId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AddOperatorToAllowListCall__Outputs {
  _call: AddOperatorToAllowListCall;

  constructor(call: AddOperatorToAllowListCall) {
    this._call = call;
  }
}

export class ConfirmActivatingValidatorCall extends ethereum.Call {
  get inputs(): ConfirmActivatingValidatorCall__Inputs {
    return new ConfirmActivatingValidatorCall__Inputs(this);
  }

  get outputs(): ConfirmActivatingValidatorCall__Outputs {
    return new ConfirmActivatingValidatorCall__Outputs(this);
  }
}

export class ConfirmActivatingValidatorCall__Inputs {
  _call: ConfirmActivatingValidatorCall;

  constructor(call: ConfirmActivatingValidatorCall) {
    this._call = call;
  }

  get publicKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ConfirmActivatingValidatorCall__Outputs {
  _call: ConfirmActivatingValidatorCall;

  constructor(call: ConfirmActivatingValidatorCall) {
    this._call = call;
  }
}

export class ConfirmExitingValidatorCall extends ethereum.Call {
  get inputs(): ConfirmExitingValidatorCall__Inputs {
    return new ConfirmExitingValidatorCall__Inputs(this);
  }

  get outputs(): ConfirmExitingValidatorCall__Outputs {
    return new ConfirmExitingValidatorCall__Outputs(this);
  }
}

export class ConfirmExitingValidatorCall__Inputs {
  _call: ConfirmExitingValidatorCall;

  constructor(call: ConfirmExitingValidatorCall) {
    this._call = call;
  }

  get publicKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ConfirmExitingValidatorCall__Outputs {
  _call: ConfirmExitingValidatorCall;

  constructor(call: ConfirmExitingValidatorCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitiateActivatingValidatorCall extends ethereum.Call {
  get inputs(): InitiateActivatingValidatorCall__Inputs {
    return new InitiateActivatingValidatorCall__Inputs(this);
  }

  get outputs(): InitiateActivatingValidatorCall__Outputs {
    return new InitiateActivatingValidatorCall__Outputs(this);
  }
}

export class InitiateActivatingValidatorCall__Inputs {
  _call: InitiateActivatingValidatorCall;

  constructor(call: InitiateActivatingValidatorCall) {
    this._call = call;
  }

  get publicKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class InitiateActivatingValidatorCall__Outputs {
  _call: InitiateActivatingValidatorCall;

  constructor(call: InitiateActivatingValidatorCall) {
    this._call = call;
  }
}

export class InitiateExitingValidatorCall extends ethereum.Call {
  get inputs(): InitiateExitingValidatorCall__Inputs {
    return new InitiateExitingValidatorCall__Inputs(this);
  }

  get outputs(): InitiateExitingValidatorCall__Outputs {
    return new InitiateExitingValidatorCall__Outputs(this);
  }
}

export class InitiateExitingValidatorCall__Inputs {
  _call: InitiateExitingValidatorCall;

  constructor(call: InitiateExitingValidatorCall) {
    this._call = call;
  }

  get publicKey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class InitiateExitingValidatorCall__Outputs {
  _call: InitiateExitingValidatorCall;

  constructor(call: InitiateExitingValidatorCall) {
    this._call = call;
  }
}

export class RemoveOperatorFromAllowListCall extends ethereum.Call {
  get inputs(): RemoveOperatorFromAllowListCall__Inputs {
    return new RemoveOperatorFromAllowListCall__Inputs(this);
  }

  get outputs(): RemoveOperatorFromAllowListCall__Outputs {
    return new RemoveOperatorFromAllowListCall__Outputs(this);
  }
}

export class RemoveOperatorFromAllowListCall__Inputs {
  _call: RemoveOperatorFromAllowListCall;

  constructor(call: RemoveOperatorFromAllowListCall) {
    this._call = call;
  }

  get operatorId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveOperatorFromAllowListCall__Outputs {
  _call: RemoveOperatorFromAllowListCall;

  constructor(call: RemoveOperatorFromAllowListCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}
