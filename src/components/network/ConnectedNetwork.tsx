"use client";
import { Flex } from "@chakra-ui/react";
import { useWalletConnect } from "@/hooks/wallet-connect/useWalletConnect";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { NetworkListComponent } from "./NetworkList";
import { useNetwork } from "@/hooks/network/useNetwork";
import { mainnet } from "viem/chains";
import { NetworkSymbolComponent } from "../icons/NetworkSymbol";

const ConnectedNetworkComponent: React.FC = () => {
  const { chain, isConnected } = useWalletConnect();
  const { switchChain } = useNetwork();
  const handleNetworkSelect = async (chainId: number) => {
    if (isConnected) await switchChain(chainId);
  };

  return chain ? (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          px={"12px"}
          py={"8px"}
          bgColor={"#101217"}
          borderRadius={"8px"}
          border={"1px solid #25282F"}
          _hover={{ border: "1px solid #555A64" }}
          height={"46px"}
          fontWeight={500}
          fontSize={"16px"}
          lineHeight={"24px"}
        >
          <Flex gap={"8px"} alignItems={"center"}>
            <NetworkSymbolComponent
              chainId={chain?.id ?? mainnet.id}
              height={20}
              width={20}
            />
            {chain?.name ?? mainnet.name}
          </Flex>
        </Button>
      </MenuTrigger>
      <NetworkListComponent onSelectNetwork={handleNetworkSelect} />
    </MenuRoot>
  ) : (
    <Button
      px={"12px"}
      py={"8px"}
      borderRadius={"8px"}
      border={"1px solid #DD3A44"}
      fontWeight={500}
      fontSize={"16px"}
      lineHeight={"normal"}
      height={"46px"}
      color={"#DD3A44"}
    >
      Wrong network
    </Button>
  );
};

export const ConnectedNetwork = dynamic(
  () => Promise.resolve(ConnectedNetworkComponent),
  { ssr: false }
);
