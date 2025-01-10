import Image from "next/image";
import React from "react";
import { ChainLayerEnum } from "@/types/network";
import EthereumIcon from "@/assets/icons/network/ethereum-network.svg";
import SepoliaIcon from "@/assets/icons/network/sepolia-network.svg";
import UnknownNetworkIcon from "@/assets/icons/network/wrong-network.svg";
import { sepolia } from "viem/chains";
import { mainnet } from "viem/chains";

export interface INetworkSymbolComponentProps {
  width?: number;
  height?: number;
  chainId: number;
}

export const NetworkSymbolComponent: React.FC<INetworkSymbolComponentProps> = ({
  chainId,
  ...props
}) => {
  const getNetworkIcon = (chainId: number) => {
    switch (chainId) {
      case mainnet.id:
        return EthereumIcon;
      case sepolia.id:
        return SepoliaIcon;
      default:
        return UnknownNetworkIcon;
    }
  };

  return (
    <Image {...props} src={getNetworkIcon(chainId)} alt={chainId.toString()} />
  );
};
