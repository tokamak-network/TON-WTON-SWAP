import { WrapUnwrapTransactionInfo } from "@/types/wrap-unwrap";

export const useApprove = (
  setIsApproving: (value: boolean) => void,
  setIsApproved: (value: boolean) => void
) => {
  const approve = async (transaction: WrapUnwrapTransactionInfo) => {
    setIsApproving(true);
    setIsApproved(true);
    console.log(transaction);
  };
  return { approve };
};
