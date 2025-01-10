import { Address } from "viem";
import { Chain } from "wagmi/chains";

export enum WrapUnwrapModeEnum {
  WRAP = "wrap",
  UNWRAP = "unwrap",
}

export interface WrapUnwrapTransactionInfo {
  mode: WrapUnwrapModeEnum;
  chain: Chain;
  address: Address;
  amount: bigint;
  formatted: string;
}
