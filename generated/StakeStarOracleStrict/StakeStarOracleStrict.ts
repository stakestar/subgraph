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

export class Proposed extends ethereum.Event {
  get params(): Proposed__Params {
    return new Proposed__Params(this);
  }
}

export class Proposed__Params {
  _event: Proposed;

  constructor(event: Proposed) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get oracleBit(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class Saved extends ethereum.Event {
  get params(): Saved__Params {
    return new Saved__Params(this);
  }
}

export class Saved__Params {
  _event: Saved;

  constructor(event: Saved) {
    this._event = event;
  }

  get epoch(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get totalBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StakeStarOracleStrict__getCurrentProposalResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getProposed_epoch(): BigInt {
    return this.value0;
  }

  getProposed_balance(): BigInt {
    return this.value1;
  }
}

export class StakeStarOracleStrict__latestTotalBalanceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getTotalBalance(): BigInt {
    return this.value0;
  }

  getTimestamp(): BigInt {
    return this.value1;
  }
}

export class StakeStarOracleStrict extends ethereum.SmartContract {
  static bind(address: Address): StakeStarOracleStrict {
    return new StakeStarOracleStrict("StakeStarOracleStrict", address);
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

  _strictEpochMode(): boolean {
    let result = super.call(
      "_strictEpochMode",
      "_strictEpochMode():(bool)",
      [],
    );

    return result[0].toBoolean();
  }

  try__strictEpochMode(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "_strictEpochMode",
      "_strictEpochMode():(bool)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _zeroEpochTimestamp(): BigInt {
    let result = super.call(
      "_zeroEpochTimestamp",
      "_zeroEpochTimestamp():(uint64)",
      [],
    );

    return result[0].toBigInt();
  }

  try__zeroEpochTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_zeroEpochTimestamp",
      "_zeroEpochTimestamp():(uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  epochToTimestamp(epoch: BigInt): BigInt {
    let result = super.call(
      "epochToTimestamp",
      "epochToTimestamp(uint32):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(epoch)],
    );

    return result[0].toBigInt();
  }

  try_epochToTimestamp(epoch: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "epochToTimestamp",
      "epochToTimestamp(uint32):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(epoch)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentProposal(
    oracle: Address,
  ): StakeStarOracleStrict__getCurrentProposalResult {
    let result = super.call(
      "getCurrentProposal",
      "getCurrentProposal(address):(uint32,uint256)",
      [ethereum.Value.fromAddress(oracle)],
    );

    return new StakeStarOracleStrict__getCurrentProposalResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_getCurrentProposal(
    oracle: Address,
  ): ethereum.CallResult<StakeStarOracleStrict__getCurrentProposalResult> {
    let result = super.tryCall(
      "getCurrentProposal",
      "getCurrentProposal(address):(uint32,uint256)",
      [ethereum.Value.fromAddress(oracle)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StakeStarOracleStrict__getCurrentProposalResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
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

  latestTotalBalance(): StakeStarOracleStrict__latestTotalBalanceResult {
    let result = super.call(
      "latestTotalBalance",
      "latestTotalBalance():(uint256,uint64)",
      [],
    );

    return new StakeStarOracleStrict__latestTotalBalanceResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_latestTotalBalance(): ethereum.CallResult<StakeStarOracleStrict__latestTotalBalanceResult> {
    let result = super.tryCall(
      "latestTotalBalance",
      "latestTotalBalance():(uint256,uint64)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StakeStarOracleStrict__latestTotalBalanceResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  nextEpochToPublish(): BigInt {
    let result = super.call(
      "nextEpochToPublish",
      "nextEpochToPublish():(uint32)",
      [],
    );

    return result[0].toBigInt();
  }

  try_nextEpochToPublish(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextEpochToPublish",
      "nextEpochToPublish():(uint32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  timestampToEpoch(timestamp: BigInt): BigInt {
    let result = super.call(
      "timestampToEpoch",
      "timestampToEpoch(uint64):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(timestamp)],
    );

    return result[0].toBigInt();
  }

  try_timestampToEpoch(timestamp: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "timestampToEpoch",
      "timestampToEpoch(uint64):(uint32)",
      [ethereum.Value.fromUnsignedBigInt(timestamp)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get zeroEpochTimestamp(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
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

export class SaveCall extends ethereum.Call {
  get inputs(): SaveCall__Inputs {
    return new SaveCall__Inputs(this);
  }

  get outputs(): SaveCall__Outputs {
    return new SaveCall__Outputs(this);
  }
}

export class SaveCall__Inputs {
  _call: SaveCall;

  constructor(call: SaveCall) {
    this._call = call;
  }

  get epoch(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get totalBalance(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SaveCall__Outputs {
  _call: SaveCall;

  constructor(call: SaveCall) {
    this._call = call;
  }
}

export class SetEpochUpdatePeriodCall extends ethereum.Call {
  get inputs(): SetEpochUpdatePeriodCall__Inputs {
    return new SetEpochUpdatePeriodCall__Inputs(this);
  }

  get outputs(): SetEpochUpdatePeriodCall__Outputs {
    return new SetEpochUpdatePeriodCall__Outputs(this);
  }
}

export class SetEpochUpdatePeriodCall__Inputs {
  _call: SetEpochUpdatePeriodCall;

  constructor(call: SetEpochUpdatePeriodCall) {
    this._call = call;
  }

  get period_in_epochs(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetEpochUpdatePeriodCall__Outputs {
  _call: SetEpochUpdatePeriodCall;

  constructor(call: SetEpochUpdatePeriodCall) {
    this._call = call;
  }
}

export class SetOracleCall extends ethereum.Call {
  get inputs(): SetOracleCall__Inputs {
    return new SetOracleCall__Inputs(this);
  }

  get outputs(): SetOracleCall__Outputs {
    return new SetOracleCall__Outputs(this);
  }
}

export class SetOracleCall__Inputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get oracle_no(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class SetOracleCall__Outputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }
}

export class SetStrictEpochModeCall extends ethereum.Call {
  get inputs(): SetStrictEpochModeCall__Inputs {
    return new SetStrictEpochModeCall__Inputs(this);
  }

  get outputs(): SetStrictEpochModeCall__Outputs {
    return new SetStrictEpochModeCall__Outputs(this);
  }
}

export class SetStrictEpochModeCall__Inputs {
  _call: SetStrictEpochModeCall;

  constructor(call: SetStrictEpochModeCall) {
    this._call = call;
  }

  get strictEpochMode(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetStrictEpochModeCall__Outputs {
  _call: SetStrictEpochModeCall;

  constructor(call: SetStrictEpochModeCall) {
    this._call = call;
  }
}
