import { jotaiGlobalLoading } from "@/jotai/loading";
import { useAtom } from "jotai";
import { useSwitchChain } from "wagmi";

export const useNetwork = () => {
  const [, setGlobalLoading] = useAtom(jotaiGlobalLoading);
  const { switchChainAsync } = useSwitchChain();

  const switchChain = async (chainId: number) => {
    setGlobalLoading(true);
    try {
      await switchChainAsync({ chainId });
    } catch (error) {
      setGlobalLoading(false);
      throw error;
    } finally {
      setGlobalLoading(false);
    }
  };

  return { switchChain, switchChainAsync };
};
