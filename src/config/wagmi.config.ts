import { createConfig, http, unstable_connector, fallback } from "wagmi";
import { injected, metaMask } from "wagmi/connectors";
import { mainnet, sepolia } from "viem/chains";
import { env } from "next-runtime-env";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: fallback([
      unstable_connector(injected),
      http(env("NEXT_PUBLIC_MAINNET_RPC_URL")),
    ]),
    [sepolia.id]: fallback([
      unstable_connector(injected),
      http(env("NEXT_PUBLIC_SEPOLIA_RPC_URL")),
    ]),
  },
});
