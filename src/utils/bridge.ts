import { WTonTokenByChainId } from "@/constants/token";
import { TonTokenByChainId } from "@/constants/token";
import {
  WrapUnwrapModeEnum,
  WrapUnwrapTransactionInfo,
} from "@/types/wrap-unwrap";

export const getWrapUnwrapToken = (transaction: WrapUnwrapTransactionInfo) => {
  return transaction.mode === WrapUnwrapModeEnum.WRAP
    ? TonTokenByChainId[transaction.chain.id]
    : WTonTokenByChainId[transaction.chain.id];
};
