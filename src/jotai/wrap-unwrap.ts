import { WrapUnwrapModeEnum } from "@/types/wrap-unwrap";
import { WrapUnwrapTransactionInfo } from "@/types/wrap-unwrap";
import { atom } from "jotai";
import { mainnet } from "viem/chains";

export const jotaiWrapUnwrapTransactionInfo = atom<WrapUnwrapTransactionInfo>({
  mode: WrapUnwrapModeEnum.WRAP,
  chain: mainnet,
  address: "0x0000000000000000000000000000000000000000",
  amount: BigInt(0),
  formatted: "0",
});
