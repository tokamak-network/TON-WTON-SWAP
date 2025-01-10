import { createConfig, http } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { mainnet, sepolia } from "viem/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
