import { Address } from "viem";
import { Chain } from "wagmi/chains";

export enum WrapUnwrapModeEnum {
  WRAP = "Wrap",
  UNWRAP = "Unwrap",
}

export interface WrapUnwrapTransactionInfo {
  mode: WrapUnwrapModeEnum;
  chain: Chain;
  address: Address;
  amount: bigint;
  formatted: string;
}
