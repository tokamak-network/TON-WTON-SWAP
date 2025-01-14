import { Address } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import ERC20_ABI from "@/abi/erc20.json";
import { useEffect } from "react";
export const useApprove = (
  setIsApproving: (isApproving: boolean) => void,
  setIsApproved: (isApproved: boolean) => void
) => {
  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const { isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });
  useEffect(() => {
    if (isPending) setIsApproving(true);
    if (isConfirmed) setIsApproved(true);
  }, [isPending, isConfirmed, setIsApproving, setIsApproved]);
  const approve = async (
    address: Address,
    spender: Address,
    amount: bigint
  ) => {
    await writeContractAsync({
      address: address,
      abi: ERC20_ABI,
      functionName: "approve",
      args: [spender, amount],
    });
  };
  return { approve };
};
