import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useAtom } from "jotai";
import { ArrowRightIconComponent } from "../icons/ArrowRight";
import { jotaiWrapUnwrapTransactionInfo } from "@/jotai/wrap-unwrap";
import { WrapUnwrapModeEnum } from "@/types/wrap-unwrap";
import { WrapUnwrapTransactionInfo } from "@/types/wrap-unwrap";
import TONTokenIcon from "@/assets/icons/token/ton.svg";
import WTONTokenIcon from "@/assets/icons/token/wton.svg";

const FromTokenIcon = {
  [WrapUnwrapModeEnum.WRAP]: TONTokenIcon,
  [WrapUnwrapModeEnum.UNWRAP]: WTONTokenIcon,
};

const FromTokenName = {
  [WrapUnwrapModeEnum.WRAP]: "TON",
  [WrapUnwrapModeEnum.UNWRAP]: "WTON",
};

const ToTokenIcon = {
  [WrapUnwrapModeEnum.WRAP]: WTONTokenIcon,
  [WrapUnwrapModeEnum.UNWRAP]: TONTokenIcon,
};

const ToTokenName = {
  [WrapUnwrapModeEnum.WRAP]: "WTON",
  [WrapUnwrapModeEnum.UNWRAP]: "TON",
};

export const FromToComponent: React.FC = () => {
  const [transaction, setTransaction] = useAtom(jotaiWrapUnwrapTransactionInfo);
  const handleSwitchMode = async () => {
    setTransaction((prev: WrapUnwrapTransactionInfo) => ({
      ...prev,
      mode:
        prev.mode === WrapUnwrapModeEnum.WRAP
          ? WrapUnwrapModeEnum.UNWRAP
          : WrapUnwrapModeEnum.WRAP,
    }));
  };
  return (
    <Flex gap={"6px"} alignItems={"flex-end"}>
      <Flex
        flexDir={"column"}
        gap={"6px"}
        justifyContent={"flex-start"}
        width={"192px"}
      >
        <Text
          fontSize={"14px"}
          color={"#8C8F97"}
          fontWeight={400}
          lineHeight={"22px"}
        >
          From
        </Text>
        <Button
          width={"192px"}
          height={"44px"}
          px={"12px"}
          py={"10px"}
          bgColor={"#1D1F25"}
          borderRadius={"6px"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Image
              src={FromTokenIcon[transaction.mode]}
              alt="ton"
              width={24}
              height={24}
            />
            <Text fontSize={"16px"} fontWeight={500} lineHeight={"normal"}>
              {FromTokenName[transaction.mode]}
            </Text>
            <div />
          </Flex>
        </Button>
      </Flex>
      <Button
        width={"44px"}
        height={"44px"}
        borderRadius={"6px"}
        bgColor={"#1D1F25"}
        _hover={{ border: "1px solid #555A64" }}
        onClick={handleSwitchMode}
      >
        <ArrowRightIconComponent />
      </Button>
      <Flex
        flexDir={"column"}
        gap={"6px"}
        justifyContent={"flex-start"}
        width={"192px"}
      >
        <Text
          fontSize={"14px"}
          color={"#8C8F97"}
          fontWeight={400}
          lineHeight={"22px"}
        >
          To
        </Text>
        <Button
          width={"192px"}
          height={"44px"}
          px={"12px"}
          py={"10px"}
          bgColor={"#1D1F25"}
          borderRadius={"6px"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Image
              src={ToTokenIcon[transaction.mode]}
              alt="ton"
              width={24}
              height={24}
            />
            <Text fontSize={"16px"} fontWeight={500} lineHeight={"normal"}>
              {ToTokenName[transaction.mode]}
            </Text>
            <div />
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};
