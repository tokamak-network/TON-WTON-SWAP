"use client";
import { jotaiWrapUnwrapTransactionInfo } from "@/jotai/wrap-unwrap";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FromToComponent } from "./FromToComponent";
import { TokenInputComponent } from "./TokenInputComponent";
export const WrapUnwrapComponent: React.FC = () => {
  // const { chain, isConnected } = useWalletConnect();
  const [transaction, setTransaction] = useAtom(jotaiWrapUnwrapTransactionInfo);
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
      {/* {needToApprove && !isApproved && isConnected && (
          <BigButtonComponent
            disabled={!isAvailableToBridge || isInsufficient}
            content={isInsufficient ? "Insufficient balance" : "Approve"}
            isLoading={isApproving}
            onClick={handleApprove}
          />
        )} */}
      {/* {transaction.mode === BridgeModeEnum.DEPOSIT &&
        isConnected &&
        isApproved && (
          <BigButtonComponent
            disabled={!isAvailableToBridge || isInsufficient}
            content={isInsufficient ? "Insufficient balance" : "Deposit"}
            onClick={() => setIsConfirmModalOpen(true)}
          />
        )}
      {transaction.mode === BridgeModeEnum.WITHDRAW &&
        transaction.step === BridgingStepEnum.INITIATE &&
        isApproved &&
        isConnected && (
          <BigButtonComponent
            disabled={!isAvailableToBridge || isInsufficient}
            content={isInsufficient ? "Insufficient balance" : "Withdraw"}
            onClick={() => setIsConfirmModalOpen(true)}
          />
        )}
      {transaction.mode === BridgeModeEnum.WITHDRAW &&
        transaction.step === BridgingStepEnum.PROVE &&
        isConnected && (
          <BigButtonComponent
            content={"Prove"}
            onClick={async () => {
              await handleProveTransaction();
            }}
            disabled={!isValidInitiateTxHash}
            isLoading={
              transactionConfirmModalStatus.status ===
              TransactionStatusEnum.READY_TO_CONFIRM
            }
          />
        )}
      {transaction.mode === BridgeModeEnum.WITHDRAW &&
        transaction.step === BridgingStepEnum.FINALIZE &&
        isConnected && (
          <BigButtonComponent
            content={"Finalize"}
            disabled={!isValidInitiateTxHash}
            onClick={async () => {
              await handleFinalizeTransaction();
            }}
            isLoading={
              transactionConfirmModalStatus.status ===
              TransactionStatusEnum.READY_TO_CONFIRM
            }
          />
        )}
      {isConnected && (
        <DepositWithdrawConfirmModal
          isOpen={isConfirmModalOpen}
          setIsOpen={setIsConfirmModalOpen}
          onClick={async (transaction: BridgeTransactionInfo) =>
            await handleBridge(transaction)
          }
          isLoading={
            transactionConfirmModalStatus.status ===
            TransactionStatusEnum.READY_TO_CONFIRM
          }
        />
      )} */}
    </Flex>
  );
};
