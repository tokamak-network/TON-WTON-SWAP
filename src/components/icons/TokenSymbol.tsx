import Image from "next/image";
import React from "react";
import TONTokenIcon from "@/assets/icons/token/ton.svg";
import WTONTokenIcon from "@/assets/icons/token/wton.svg";

export interface ITokenSymbolComponentProps {
  width?: number;
  height?: number;
  tokenSymbol: string;
}

export const TokenSymbolComponent: React.FC<ITokenSymbolComponentProps> = ({
  tokenSymbol,
  ...props
}) => {
  const getTokenIcon = (symbol: string) => {
    switch (symbol.toUpperCase()) {
      case "TON":
        return TONTokenIcon;
      case "WTON":
        return WTONTokenIcon;
    }
  };

  return <Image {...props} src={getTokenIcon(tokenSymbol)} alt={tokenSymbol} />;
};
