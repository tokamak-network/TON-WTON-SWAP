import { WTonTokenByChainId } from "@/constants/token";
import { WrapUnwrapTransactionInfo } from "@/types/wrap-unwrap";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import WTON_ABI from "@/abi/wton.json";
import { useEffect } from "react";
import { TransactionStatusEnum } from "@/types/transaction";
import {
  jotaiTransactionConfirmModalStatus,
  jotaiWrapUnwrapTransactionInfo,
} from "@/jotai/wrap-unwrap";
import { useAtom } from "jotai";

export const useUnwrap = () => {
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const [, setTransactionConfirmModalStatus] = useAtom(
    jotaiTransactionConfirmModalStatus
  );

  const [, setTransaction] = useAtom(jotaiWrapUnwrapTransactionInfo);

  useEffect(() => {
    if (isPending) {
      setTransactionConfirmModalStatus({
        isOpen: true,
        status: TransactionStatusEnum.CONFIRMING,
      });
    }
  }, [isPending, hash, setTransactionConfirmModalStatus, setTransaction]);

  useEffect(() => {
    if (isConfirmed && hash) {
      setTransactionConfirmModalStatus({
        isOpen: true,
        status: TransactionStatusEnum.SUCCESS,
        txHash: hash,
      });
      setTransaction((prev) => ({
        ...prev,
        amount: BigInt(0),
        formatted: "",
      }));
    }
  }, [isConfirmed, hash, setTransactionConfirmModalStatus, setTransaction]);

  const unwrap = async (transaction: WrapUnwrapTransactionInfo) => {
    const wtonAddress = WTonTokenByChainId[transaction.chain.id].address;
    if (!wtonAddress) throw new Error("WTON address not found");
    await writeContractAsync({
      address: wtonAddress,
      abi: WTON_ABI,
      functionName: "swapToTON",
      args: [transaction.amount],
    });
    return hash;
  };
  return { unwrap };
};
