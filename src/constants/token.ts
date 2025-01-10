import { Token } from "@/types/token";
import { l1Chain, l2Chain } from "@/config/network";
import { L2_USDC_ADDRESS } from "./contract";
import { env } from "next-runtime-env";
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
export const supportedTokens: Token[] = [
  {
    chainId: l1Chain.id,
    isNativeCurrency: true,
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
    bridgedTokenSymbol: "eth",
  },
  {
    chainId: l2Chain.id,
    isNativeCurrency: false,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    address: "0x4200000000000000000000000000000000000486",
    bridgedTokenSymbol: "eth",
  },
  {
    chainId: l1Chain.id,
    isNativeCurrency: false,
    name: "Native Token",
    symbol: "NativeToken",
    decimals: 18,
    address: env("NEXT_PUBLIC_NATIVE_TOKEN_L1_ADDRESS") as `0x${string}`,
    bridgedTokenSymbol: "native",
  },
  {
    chainId: l2Chain.id,
    isNativeCurrency: true,
    name: l2Chain.nativeCurrency.name || "Native Token",
    symbol: l2Chain.nativeCurrency.symbol || "Native Token",
    decimals: 18,
    bridgedTokenSymbol: "native",
  },
  {
    chainId: l1Chain.id,
    isNativeCurrency: false,
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    address: env("NEXT_PUBLIC_L1_USDT_ADDRESS") as `0x${string}`,
    bridgedTokenSymbol: "usdt",
  },
  {
    chainId: l2Chain.id,
    isNativeCurrency: false,
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    address: env("NEXT_PUBLIC_L2_USDT_ADDRESS") as `0x${string}`,
    bridgedTokenSymbol: "usdt",
  },
  {
    chainId: l1Chain.id,
    isNativeCurrency: false,
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    address: env("NEXT_PUBLIC_L1_USDC_ADDRESS") as `0x${string}`,
    bridgedTokenSymbol: "usdc",
  },
  {
    chainId: l2Chain.id,
    isNativeCurrency: false,
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
    address: L2_USDC_ADDRESS,
    bridgedTokenSymbol: "usdc",
  },
];
