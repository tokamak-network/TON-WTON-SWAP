import { useState } from "react";

import { getTokenBalance } from "@/utils/token-balance";
import { useEffect } from "react";
import { TokenBalance } from "@/types/token";
import { useWalletConnect } from "../wallet-connect/useWalletConnect";
import { WrapUnwrapTransactionInfo } from "@/types/wrap-unwrap";
import { getWrapUnwrapToken } from "@/utils/bridge";

export const useTokenBalance = (transaction: WrapUnwrapTransactionInfo) => {
  const [balance, setBalance] = useState<TokenBalance | null>(null);
  const { isConnected } = useWalletConnect();

  useEffect(() => {
    if (!isConnected) return;
    const wrapUnwrapToken = getWrapUnwrapToken(transaction);
    if (!wrapUnwrapToken) return;

    const getBalance = async () => {
      const balance = await getTokenBalance(
        transaction.address as `0x${string}`,
        wrapUnwrapToken.address,
        wrapUnwrapToken.chainId
      );
      setBalance(balance);
    };

    getBalance();

    const interval = setInterval(getBalance, 3000);

    return () => clearInterval(interval);
  }, [transaction, isConnected]);

  return { balance };
};
