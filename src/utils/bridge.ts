import { WTonTokenByChainId } from "@/constants/token";
import { TonTokenByChainId } from "@/constants/token";
import {
  WrapUnwrapModeEnum,
  WrapUnwrapTransactionInfo,
} from "@/types/wrap-unwrap";

export const getWrapUnwrapToken = (transaction: WrapUnwrapTransactionInfo) => {
  if (!transaction.chain) {
    return null;
  }
  return transaction.mode === WrapUnwrapModeEnum.WRAP
    ? TonTokenByChainId[transaction.chain.id]
    : WTonTokenByChainId[transaction.chain.id];
};

export const getWrapUnwrapTokenBalance = (
  mode: WrapUnwrapModeEnum,
  amount: string
) => {
  if (mode === WrapUnwrapModeEnum.WRAP) {
    return amount;
  }
  const decimalPlaces = amount.indexOf(".");
  if (decimalPlaces === -1) return amount;

  return amount.slice(0, decimalPlaces + 19);
};
