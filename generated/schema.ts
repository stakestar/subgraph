// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class StakeStarTvlTotal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeStarTvlTotal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakeStarTvlTotal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeStarTvlTotal", id.toString(), this);
    }
  }

  static load(id: string): StakeStarTvlTotal | null {
    return changetype<StakeStarTvlTotal | null>(
      store.get("StakeStarTvlTotal", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalETH(): BigInt {
    let value = this.get("totalETH");
    return value!.toBigInt();
  }

  set totalETH(value: BigInt) {
    this.set("totalETH", Value.fromBigInt(value));
  }
}

export class StakeStarTvl extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeStarTvl entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakeStarTvl must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeStarTvl", id.toString(), this);
    }
  }

  static load(id: string): StakeStarTvl | null {
    return changetype<StakeStarTvl | null>(store.get("StakeStarTvl", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get totalETH(): BigInt {
    let value = this.get("totalETH");
    return value!.toBigInt();
  }

  set totalETH(value: BigInt) {
    this.set("totalETH", Value.fromBigInt(value));
  }
}

export class TokenRate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenRate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenRate must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenRate", id.toString(), this);
    }
  }

  static load(id: string): TokenRate | null {
    return changetype<TokenRate | null>(store.get("TokenRate", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    return value!.toBigInt();
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }
}

export class TokenRateDaily extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenRateDaily entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenRateDaily must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenRateDaily", id.toString(), this);
    }
  }

  static load(id: string): TokenRateDaily | null {
    return changetype<TokenRateDaily | null>(store.get("TokenRateDaily", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    return value!.toBigInt();
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }
}

export class Operator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Operator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Operator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Operator", id.toString(), this);
    }
  }

  static load(id: string): Operator | null {
    return changetype<Operator | null>(store.get("Operator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class StakerAtMomentRate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakerAtMomentRate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakerAtMomentRate must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakerAtMomentRate", id.toString(), this);
    }
  }

  static load(id: string): StakerAtMomentRate | null {
    return changetype<StakerAtMomentRate | null>(
      store.get("StakerAtMomentRate", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get atMomentRate(): BigInt {
    let value = this.get("atMomentRate");
    return value!.toBigInt();
  }

  set atMomentRate(value: BigInt) {
    this.set("atMomentRate", Value.fromBigInt(value));
  }
}

export class StakeStarRewardsTotal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save StakeStarRewardsTotal entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakeStarRewardsTotal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeStarRewardsTotal", id.toString(), this);
    }
  }

  static load(id: string): StakeStarRewardsTotal | null {
    return changetype<StakeStarRewardsTotal | null>(
      store.get("StakeStarRewardsTotal", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewards(): BigInt {
    let value = this.get("rewards");
    return value!.toBigInt();
  }

  set rewards(value: BigInt) {
    this.set("rewards", Value.fromBigInt(value));
  }
}

export class StakeStarRewardsDaily extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save StakeStarRewardsDaily entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakeStarRewardsDaily must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeStarRewardsDaily", id.toString(), this);
    }
  }

  static load(id: string): StakeStarRewardsDaily | null {
    return changetype<StakeStarRewardsDaily | null>(
      store.get("StakeStarRewardsDaily", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get rewards(): BigInt {
    let value = this.get("rewards");
    return value!.toBigInt();
  }

  set rewards(value: BigInt) {
    this.set("rewards", Value.fromBigInt(value));
  }
}

export class Validator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Validator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Validator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Validator", id.toString(), this);
    }
  }

  static load(id: string): Validator | null {
    return changetype<Validator | null>(store.get("Validator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}
