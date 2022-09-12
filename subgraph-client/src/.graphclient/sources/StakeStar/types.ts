
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace StakeStarTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: bigint;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type OperatorAllowList = {
  id: Scalars['ID'];
};

export type OperatorAllowList_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type OperatorAllowList_orderBy =
  | 'id';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  stakeStarTvl?: Maybe<StakeStarTvl>;
  stakeStarTvls: Array<StakeStarTvl>;
  tokenRateDaily?: Maybe<TokenRateDaily>;
  tokenRateDailies: Array<TokenRateDaily>;
  operatorAllowList?: Maybe<OperatorAllowList>;
  operatorAllowLists: Array<OperatorAllowList>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerystakeStarTvlArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeStarTvlsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeStarTvl_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeStarTvl_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenRateDailyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenRateDailiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenRateDaily_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenRateDaily_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryoperatorAllowListArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryoperatorAllowListsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OperatorAllowList_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatorAllowList_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type StakeStarTvl = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  totalETH: Scalars['BigInt'];
};

export type StakeStarTvl_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalETH?: InputMaybe<Scalars['BigInt']>;
  totalETH_not?: InputMaybe<Scalars['BigInt']>;
  totalETH_gt?: InputMaybe<Scalars['BigInt']>;
  totalETH_lt?: InputMaybe<Scalars['BigInt']>;
  totalETH_gte?: InputMaybe<Scalars['BigInt']>;
  totalETH_lte?: InputMaybe<Scalars['BigInt']>;
  totalETH_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalETH_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type StakeStarTvl_orderBy =
  | 'id'
  | 'date'
  | 'totalETH';

export type Subscription = {
  stakeStarTvl?: Maybe<StakeStarTvl>;
  stakeStarTvls: Array<StakeStarTvl>;
  tokenRateDaily?: Maybe<TokenRateDaily>;
  tokenRateDailies: Array<TokenRateDaily>;
  operatorAllowList?: Maybe<OperatorAllowList>;
  operatorAllowLists: Array<OperatorAllowList>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionstakeStarTvlArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeStarTvlsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakeStarTvl_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakeStarTvl_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenRateDailyArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenRateDailiesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenRateDaily_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenRateDaily_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionoperatorAllowListArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionoperatorAllowListsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OperatorAllowList_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatorAllowList_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TokenRateDaily = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  rate: Scalars['BigInt'];
};

export type TokenRateDaily_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rate?: InputMaybe<Scalars['BigInt']>;
  rate_not?: InputMaybe<Scalars['BigInt']>;
  rate_gt?: InputMaybe<Scalars['BigInt']>;
  rate_lt?: InputMaybe<Scalars['BigInt']>;
  rate_gte?: InputMaybe<Scalars['BigInt']>;
  rate_lte?: InputMaybe<Scalars['BigInt']>;
  rate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenRateDaily_orderBy =
  | 'id'
  | 'date'
  | 'rate';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Timestamp of the block if available, format depends on the chain */
  timestamp?: Maybe<Scalars['String']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

}
export type QueryStakeStarSdk = {
  /** undefined **/
  stakeStarTvl: InContextSdkMethod<StakeStarTypes.Query['stakeStarTvl'], StakeStarTypes.QuerystakeStarTvlArgs, MeshContext>,
  /** undefined **/
  stakeStarTvls: InContextSdkMethod<StakeStarTypes.Query['stakeStarTvls'], StakeStarTypes.QuerystakeStarTvlsArgs, MeshContext>,
  /** undefined **/
  tokenRateDaily: InContextSdkMethod<StakeStarTypes.Query['tokenRateDaily'], StakeStarTypes.QuerytokenRateDailyArgs, MeshContext>,
  /** undefined **/
  tokenRateDailies: InContextSdkMethod<StakeStarTypes.Query['tokenRateDailies'], StakeStarTypes.QuerytokenRateDailiesArgs, MeshContext>,
  /** undefined **/
  operatorAllowList: InContextSdkMethod<StakeStarTypes.Query['operatorAllowList'], StakeStarTypes.QueryoperatorAllowListArgs, MeshContext>,
  /** undefined **/
  operatorAllowLists: InContextSdkMethod<StakeStarTypes.Query['operatorAllowLists'], StakeStarTypes.QueryoperatorAllowListsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<StakeStarTypes.Query['_meta'], StakeStarTypes.Query_metaArgs, MeshContext>
};

export type MutationStakeStarSdk = {

};

export type SubscriptionStakeStarSdk = {
  /** undefined **/
  stakeStarTvl: InContextSdkMethod<StakeStarTypes.Subscription['stakeStarTvl'], StakeStarTypes.SubscriptionstakeStarTvlArgs, MeshContext>,
  /** undefined **/
  stakeStarTvls: InContextSdkMethod<StakeStarTypes.Subscription['stakeStarTvls'], StakeStarTypes.SubscriptionstakeStarTvlsArgs, MeshContext>,
  /** undefined **/
  tokenRateDaily: InContextSdkMethod<StakeStarTypes.Subscription['tokenRateDaily'], StakeStarTypes.SubscriptiontokenRateDailyArgs, MeshContext>,
  /** undefined **/
  tokenRateDailies: InContextSdkMethod<StakeStarTypes.Subscription['tokenRateDailies'], StakeStarTypes.SubscriptiontokenRateDailiesArgs, MeshContext>,
  /** undefined **/
  operatorAllowList: InContextSdkMethod<StakeStarTypes.Subscription['operatorAllowList'], StakeStarTypes.SubscriptionoperatorAllowListArgs, MeshContext>,
  /** undefined **/
  operatorAllowLists: InContextSdkMethod<StakeStarTypes.Subscription['operatorAllowLists'], StakeStarTypes.SubscriptionoperatorAllowListsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<StakeStarTypes.Subscription['_meta'], StakeStarTypes.Subscription_metaArgs, MeshContext>
};
export type StakeStarContext = {
      ["StakeStar"]: { Query: QueryStakeStarSdk, Mutation: MutationStakeStarSdk, Subscription: SubscriptionStakeStarSdk },
      
    };