import { createConfig, http } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { l1Chain, l2Chain } from "./network";
import { mainnet, sepolia } from "viem/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
