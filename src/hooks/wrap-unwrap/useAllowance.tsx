import { useWalletConnect } from "../wallet-connect/useWalletConnect";
import { useReadContract } from "wagmi";
import ERC20_ABI from "@/abi/erc20.json";
import { TonTokenByChainId, WTonTokenByChainId } from "@/constants/token";
import { mainnet } from "viem/chains";

export const useTONAllowance = () => {
  const { address, chain } = useWalletConnect();
  const chainId = chain ? chain.id : mainnet.id;
  const tonToken = TonTokenByChainId[chainId];
  const wTonToken = WTonTokenByChainId[chainId];
  const { data } = useReadContract({
    address: tonToken.address,
    abi: ERC20_ABI,
    functionName: "allowance",
    args: [address, wTonToken.address],
    query: {
      refetchInterval: 2000,
      enabled: !!address && !!chain,
    },
  });

  if (!data) return BigInt(0);

  return BigInt(data.toString());
};
