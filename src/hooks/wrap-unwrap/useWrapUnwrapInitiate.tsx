import { useEffect } from "react";
import { useWalletConnect } from "../wallet-connect/useWalletConnect";
import { useAtom } from "jotai";
import { WrapUnwrapTransactionInfo } from "@/types/wrap-unwrap";
import { jotaiWrapUnwrapTransactionInfo } from "@/jotai/wrap-unwrap";
import { Address, Chain } from "viem";

export const useWrapUnwrapInitiate = () => {
  const { isConnected, address, chain } = useWalletConnect();
  const [transaction, setTransaction] = useAtom(jotaiWrapUnwrapTransactionInfo);
  useEffect(() => {
    setTransaction((prev: WrapUnwrapTransactionInfo) => ({
      ...prev,
      amount: BigInt(0),
      formatted: "0",
      address: address as Address,
      chain: chain as Chain,
    }));
  }, [address, isConnected, chain, setTransaction, transaction.mode]);

  return { transaction };
};
