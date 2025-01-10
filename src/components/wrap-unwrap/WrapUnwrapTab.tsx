import { BridgeModeEnum } from "@/types/bridge";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { useNetwork } from "@/hooks/network/useNetwork";
import { jotaiWrapUnwrapTransactionInfo } from "@/jotai/wrap-unwrap";
import { WrapUnwrapModeEnum } from "@/types/wrap-unwrap";

export const WrapUnwrapTabComponent: React.FC = () => {
  const [transaction, setTransaction] = useAtom(jotaiWrapUnwrapTransactionInfo);
  const handleClick = async (status: WrapUnwrapModeEnum) => {
    if (status === transaction.mode) return;
    setTransaction((prev) => ({ ...prev, mode: status }));
  };

  return (
    <Flex
      width={"288px"}
      height={"48px"}
      borderRadius={"32px"}
      border={"1px solid #25282F"}
      _hover={{ border: "1px solid #555A64" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button
        width={"144px"}
        bgColor={"transparent"}
        fontSize={"18px"}
        color={
          transaction.mode === WrapUnwrapModeEnum.WRAP ? "#0070ED" : "#8C8F97"
        }
        _hover={{
          color:
            transaction.mode === WrapUnwrapModeEnum.WRAP
              ? "#0070ED"
              : "#BBBEC6",
        }}
        fontWeight={500}
        lineHeight={"normal"}
        borderRadius={"32px"}
        border={
          transaction.mode === WrapUnwrapModeEnum.WRAP
            ? "1px solid #0070ED"
            : ""
        }
        height={"100%"}
        onClick={() => handleClick(WrapUnwrapModeEnum.WRAP)}
      >
        Wrap
      </Button>
      <Button
        width={"144px"}
        bgColor={"transparent"}
        fontSize={"18px"}
        color={
          transaction.mode === WrapUnwrapModeEnum.UNWRAP ? "#0070ED" : "#8C8F97"
        }
        fontWeight={500}
        lineHeight={"normal"}
        borderRadius={"32px"}
        border={
          transaction.mode === WrapUnwrapModeEnum.UNWRAP
            ? "1px solid #0070ED"
            : ""
        }
        _hover={{
          color:
            transaction.mode === WrapUnwrapModeEnum.UNWRAP
              ? "#0070ED"
              : "#BBBEC6",
        }}
        height={"100%"}
        onClick={() => handleClick(WrapUnwrapModeEnum.UNWRAP)}
      >
        Unwrap
      </Button>
    </Flex>
  );
};
