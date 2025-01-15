import { Address } from "viem";
import { useWriteContract } from "wagmi";
import ERC20_ABI from "@/abi/erc20.json";
import { useEffect } from "react";
export const useApprove = (setIsApproving: (isApproving: boolean) => void) => {
  const { isPending, writeContractAsync } = useWriteContract();
  useEffect(() => {
    if (isPending) setIsApproving(true);
  }, [isPending, setIsApproving]);
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
