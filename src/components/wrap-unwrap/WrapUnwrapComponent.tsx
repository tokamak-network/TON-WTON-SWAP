"use client";
import {
  jotaiTransactionConfirmModalStatus,
  jotaiWrapUnwrapTransactionInfo,
} from "@/jotai/wrap-unwrap";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FromToComponent } from "./FromToComponent";
import { TokenInputComponent } from "./TokenInputComponent";
import { BigButtonComponent } from "../ui/BigButton";
import { jotaiIsInsufficient } from "@/jotai/bridge";
import { useWalletConnect } from "@/hooks/wallet-connect/useWalletConnect";
import { useEffect, useState } from "react";
import { WrapUnwrapModeEnum } from "@/types/wrap-unwrap";
import { useUnwrap } from "@/hooks/wrap-unwrap/useUnwrap";
import { TransactionStatusEnum } from "@/types/transaction";
import { useApprove } from "@/hooks/wrap-unwrap/useApprove";
import { TonTokenByChainId, WTonTokenByChainId } from "@/constants/token";
import { useWrap } from "@/hooks/wrap-unwrap/useWrap";
import { ReceiveAmountComponent } from "./ReceiveAmountComponent";
import { useTONAllowance } from "@/hooks/wrap-unwrap/useAllowance";

export const WrapUnwrapComponent: React.FC = () => {
  const { isConnected, chain } = useWalletConnect();
  const [transaction] = useAtom(jotaiWrapUnwrapTransactionInfo);
  const [transactionConfirmModalStatus, setTransactionConfirmModalStatus] =
    useAtom(jotaiTransactionConfirmModalStatus);
  const [isInsufficient] = useAtom(jotaiIsInsufficient);
  const [isApproving, setIsApproving] = useState<boolean>(false);
  const [needToApprove, setNeedToApprove] = useState<boolean>(false);
  const { approve } = useApprove(setIsApproving);
  const { unwrap } = useUnwrap();
  const { wrap } = useWrap();
  const allowance = useTONAllowance();
  useEffect(() => {
    if (transaction.mode === WrapUnwrapModeEnum.WRAP && transaction.formatted)
      setNeedToApprove(allowance < transaction.amount);
    else setNeedToApprove(false);
  }, [
    allowance,
    transaction.amount,
    setNeedToApprove,
    transaction.mode,
    transaction.formatted,
  ]);
  useEffect(() => {
    setIsApproving(false);
  }, [transaction]);
  const handleApprove = async () => {
    if (!isConnected || !chain) return;
    const tonToken = TonTokenByChainId[chain.id];
    const wtonToken = WTonTokenByChainId[chain.id];
    if (!tonToken.address || !wtonToken.address) return;
    try {
      await approve(tonToken.address, wtonToken.address, transaction.amount);
    } catch (error) {
      setIsApproving(false);
      console.error(error);
    }
  };
  const handleWrap = async () => {
    if (!isConnected) return;
    try {
      await wrap(transaction);
    } catch (error) {
      setTransactionConfirmModalStatus({
        isOpen: true,
        status: TransactionStatusEnum.ERROR,
      });
      console.error(error);
    }
  };
  const handleUnWrap = async () => {
    if (!isConnected) return;
    try {
      await unwrap(transaction);
    } catch (error) {
      setTransactionConfirmModalStatus({
        isOpen: true,
        status: TransactionStatusEnum.ERROR,
      });
      console.error(error);
    }
  };

  const isDisabled = isInsufficient || transaction.amount === BigInt(0);
  return (
    <Flex flexDir={"column"} gap={"32px"} width={"100%"}>
      <Flex
        bgColor={"#101217"}
        borderRadius={"22px"}
        border={"1px solid #25282F"}
        p={"24px"}
        gap={"16px"}
        flexDir={"column"}
      >
        <FromToComponent />
        <TokenInputComponent />
        {transaction.amount && (
          <ReceiveAmountComponent
            amount={transaction.formatted}
            tokenSymbol={
              transaction.mode === WrapUnwrapModeEnum.WRAP ? "WTON" : "TON"
            }
          />
        )}
      </Flex>
      {needToApprove && isConnected && (
        <BigButtonComponent
          disabled={isDisabled}
          content={isInsufficient ? "Insufficient balance" : "Approve"}
          isLoading={isApproving}
          onClick={handleApprove}
        />
      )}
      {transaction.mode === WrapUnwrapModeEnum.WRAP &&
        isConnected &&
        !needToApprove && (
          <BigButtonComponent
            disabled={isDisabled}
            isLoading={
              transactionConfirmModalStatus.status ===
              TransactionStatusEnum.CONFIRMING
            }
            content={isInsufficient ? "Insufficient balance" : "Wrap"}
            onClick={handleWrap}
          />
        )}
      {transaction.mode === WrapUnwrapModeEnum.UNWRAP && isConnected && (
        <BigButtonComponent
          disabled={isDisabled}
          isLoading={
            transactionConfirmModalStatus.status ===
            TransactionStatusEnum.CONFIRMING
          }
          content={isInsufficient ? "Insufficient balance" : "Unwrap"}
          onClick={handleUnWrap}
        />
      )}
    </Flex>
  );
};
