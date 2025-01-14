import { createConfig, http } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { mainnet, sepolia } from "viem/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(
      "https://mainnet.infura.io/v3/32b6f0fc73394d69afba9d6db3a9d84e"
    ),
    [sepolia.id]: http(
      "https://sepolia.infura.io/v3/e4b3b2781dd34bc4817a1221b8a3b50a"
    ),
  },
});
