import { Token } from "@/types/token";
import { mainnet, sepolia } from "viem/chains";

export const TonTokenByChainId: Record<number, Token> = {
  [mainnet.id]: {
    chainId: mainnet.id,
    isNativeCurrency: false,
    address: "0x2be5e8c109e2197D077D13A82dAead6a9b3433C5",
    name: "Tokamak Network Token",
    symbol: "TON",
    decimals: 18,
  },
  [sepolia.id]: {
    chainId: sepolia.id,
    isNativeCurrency: false,
    address: "0xa30fe40285B8f5c0457DbC3B7C8A280373c40044",
    name: "Tokamak Network Token",
    symbol: "TON",
    decimals: 18,
  },
};

export const WTonTokenByChainId: Record<number, Token> = {
  [mainnet.id]: {
    chainId: mainnet.id,
    isNativeCurrency: false,
    address: "0x2be5e8c109e2197D077D13A82dAead6a9b3433C5",
    name: "Wrapped TON",
    symbol: "WTON",
    decimals: 27,
  },
  [sepolia.id]: {
    chainId: sepolia.id,
    isNativeCurrency: false,
    address: "0x79E0d92670106c85E9067b56B8F674340dCa0Bbd",
    name: "Wrapped TON",
    symbol: "WTON",
    decimals: 27,
  },
};
