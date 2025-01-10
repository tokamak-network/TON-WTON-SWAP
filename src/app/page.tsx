"use client";
import { WalletConnectButtonComponent } from "@/components/wallet-connect/WalletConnectButton";
import { WrapUnwrapComponent } from "@/components/wrap-unwrap/WrapUnwrapComponent";
import { WrapUnwrapTabComponent } from "@/components/wrap-unwrap/WrapUnwrapTab";
import { useWalletConnect } from "@/hooks/wallet-connect/useWalletConnect";
import { useWrapUnwrapInitiate } from "@/hooks/wrap-unwrap/useWrapUnwrapInitiate";
import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HomePageContent: React.FC = () => {
  const { isConnected } = useWalletConnect();
  useWrapUnwrapInitiate();
  return (
    <Flex w={"100%"} justifyContent={"center"}>
      <Flex
        w={"488px"}
        mt={"48px"}
        gap={"40px"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <WrapUnwrapTabComponent />
        <Flex gap={"32px"} width={"100%"} flexDir={"column"}>
          <WrapUnwrapComponent />
          {!isConnected && <WalletConnectButtonComponent />}
        </Flex>
      </Flex>
    </Flex>
  );
};

const HomePage = dynamic(() => Promise.resolve(HomePageContent), {
  ssr: false,
});

export default HomePage;
