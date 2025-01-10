"use client";
import { jotaiWrapUnwrapTransactionInfo } from "@/jotai/wrap-unwrap";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FromToComponent } from "./FromToComponent";
import { TokenInputComponent } from "./TokenInputComponent";
import { BigButtonComponent } from "../ui/BigButton";
import { jotaiIsInsufficient } from "@/jotai/bridge";
import { useWalletConnect } from "@/hooks/wallet-connect/useWalletConnect";
import { useState } from "react";
import { WrapUnwrapModeEnum } from "@/types/wrap-unwrap";
export const WrapUnwrapComponent: React.FC = () => {
  const { isConnected } = useWalletConnect();
  const [transaction] = useAtom(jotaiWrapUnwrapTransactionInfo);
  const [isInsufficient] = useAtom(jotaiIsInsufficient);
  const [isApproving] = useState<boolean>(false);
  const [isApproved] = useState<boolean>(false);
  const handleApprove = () => {};
  const handleWrap = () => {};
  const handleUnWrap = () => {};
  const needToApprove = transaction.mode === WrapUnwrapModeEnum.WRAP;
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
      </Flex>
      {needToApprove && !isApproved && isConnected && (
        <BigButtonComponent
          disabled={isInsufficient}
          content={isInsufficient ? "Insufficient balance" : "Approve"}
          isLoading={isApproving}
          onClick={handleApprove}
        />
      )}
      {transaction.mode === WrapUnwrapModeEnum.WRAP &&
        isConnected &&
        isApproved && (
          <BigButtonComponent
            disabled={isInsufficient}
            content={isInsufficient ? "Insufficient balance" : "Wrap"}
            onClick={handleWrap}
          />
        )}
      {transaction.mode === WrapUnwrapModeEnum.UNWRAP && isConnected && (
        <BigButtonComponent
          disabled={isInsufficient}
          content={isInsufficient ? "Insufficient balance" : "Unwrap"}
          onClick={handleUnWrap}
        />
      )}
    </Flex>
  );
};
