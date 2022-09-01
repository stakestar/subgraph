// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

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

export class Stake extends ethereum.Event {
  get params(): Stake__Params {
    return new Stake__Params(this);
  }
}

export class Stake__Params {
  _event: Stake;

  constructor(event: Stake) {
    this._event = event;
  }

  get staker(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class StakeStar extends ethereum.SmartContract {
  static bind(address: Address): StakeStar {
    return new StakeStar("StakeStar", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  depositContract(): Address {
    let result = super.call(
      "depositContract",
      "depositContract():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_depositContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "depositContract",
      "depositContract():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
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
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  ssvNetwork(): Address {
    let result = super.call("ssvNetwork", "ssvNetwork():(address)", []);

    return result[0].toAddress();
  }

  try_ssvNetwork(): ethereum.CallResult<Address> {
    let result = super.tryCall("ssvNetwork", "ssvNetwork():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ssvToken(): Address {
    let result = super.call("ssvToken", "ssvToken():(address)", []);

    return result[0].toAddress();
  }

  try_ssvToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("ssvToken", "ssvToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakeStarReceipt(): Address {
    let result = super.call(
      "stakeStarReceipt",
      "stakeStarReceipt():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_stakeStarReceipt(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakeStarReceipt",
      "stakeStarReceipt():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakeStarRegistry(): Address {
    let result = super.call(
      "stakeStarRegistry",
      "stakeStarRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_stakeStarRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakeStarRegistry",
      "stakeStarRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakeStarRewards(): Address {
    let result = super.call(
      "stakeStarRewards",
      "stakeStarRewards():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_stakeStarRewards(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakeStarRewards",
      "stakeStarRewards():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validatorCreationAvailability(): boolean {
    let result = super.call(
      "validatorCreationAvailability",
      "validatorCreationAvailability():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_validatorCreationAvailability(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "validatorCreationAvailability",
      "validatorCreationAvailability():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  validatorDestructionAvailability(): boolean {
    let result = super.call(
      "validatorDestructionAvailability",
      "validatorDestructionAvailability():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_validatorDestructionAvailability(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "validatorDestructionAvailability",
      "validatorDestructionAvailability():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ApplyPenaltiesCall extends ethereum.Call {
  get inputs(): ApplyPenaltiesCall__Inputs {
    return new ApplyPenaltiesCall__Inputs(this);
  }

  get outputs(): ApplyPenaltiesCall__Outputs {
    return new ApplyPenaltiesCall__Outputs(this);
  }
}

export class ApplyPenaltiesCall__Inputs {
  _call: ApplyPenaltiesCall;

  constructor(call: ApplyPenaltiesCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApplyPenaltiesCall__Outputs {
  _call: ApplyPenaltiesCall;

  constructor(call: ApplyPenaltiesCall) {
    this._call = call;
  }
}

export class ApplyRewardsCall extends ethereum.Call {
  get inputs(): ApplyRewardsCall__Inputs {
    return new ApplyRewardsCall__Inputs(this);
  }

  get outputs(): ApplyRewardsCall__Outputs {
    return new ApplyRewardsCall__Outputs(this);
  }
}

export class ApplyRewardsCall__Inputs {
  _call: ApplyRewardsCall;

  constructor(call: ApplyRewardsCall) {
    this._call = call;
  }
}

export class ApplyRewardsCall__Outputs {
  _call: ApplyRewardsCall;

  constructor(call: ApplyRewardsCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class CreateValidatorCall extends ethereum.Call {
  get inputs(): CreateValidatorCall__Inputs {
    return new CreateValidatorCall__Inputs(this);
  }

  get outputs(): CreateValidatorCall__Outputs {
    return new CreateValidatorCall__Outputs(this);
  }
}

export class CreateValidatorCall__Inputs {
  _call: CreateValidatorCall;

  constructor(call: CreateValidatorCall) {
    this._call = call;
  }

  get validatorParams(): CreateValidatorCallValidatorParamsStruct {
    return changetype<CreateValidatorCallValidatorParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get ssvDepositAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateValidatorCall__Outputs {
  _call: CreateValidatorCall;

  constructor(call: CreateValidatorCall) {
    this._call = call;
  }
}

export class CreateValidatorCallValidatorParamsStruct extends ethereum.Tuple {
  get publicKey(): Bytes {
    return this[0].toBytes();
  }

  get withdrawalCredentials(): Bytes {
    return this[1].toBytes();
  }

  get signature(): Bytes {
    return this[2].toBytes();
  }

  get depositDataRoot(): Bytes {
    return this[3].toBytes();
  }

  get operatorIds(): Array<BigInt> {
    return this[4].toBigIntArray();
  }

  get sharesPublicKeys(): Array<Bytes> {
    return this[5].toBytesArray();
  }

  get sharesEncrypted(): Array<Bytes> {
    return this[6].toBytesArray();
  }
}

export class DestroyValidatorCall extends ethereum.Call {
  get inputs(): DestroyValidatorCall__Inputs {
    return new DestroyValidatorCall__Inputs(this);
  }

  get outputs(): DestroyValidatorCall__Outputs {
    return new DestroyValidatorCall__Outputs(this);
  }
}

export class DestroyValidatorCall__Inputs {
  _call: DestroyValidatorCall;

  constructor(call: DestroyValidatorCall) {
    this._call = call;
  }
}

export class DestroyValidatorCall__Outputs {
  _call: DestroyValidatorCall;

  constructor(call: DestroyValidatorCall) {
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

  get depositContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ssvNetworkAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ssvTokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get stakeStarRegistryAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
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

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}
