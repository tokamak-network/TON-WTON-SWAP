import { WrapUnwrapModeEnum } from "@/types/wrap-unwrap";
import TONTokenIcon from "@/assets/icons/token/ton.svg";
import WTONTokenIcon from "@/assets/icons/token/wton.svg";

export const FromTokenIcon = {
  [WrapUnwrapModeEnum.WRAP]: TONTokenIcon,
  [WrapUnwrapModeEnum.UNWRAP]: WTONTokenIcon,
};

export const FromTokenName = {
  [WrapUnwrapModeEnum.WRAP]: "TON",
  [WrapUnwrapModeEnum.UNWRAP]: "WTON",
};

export const ToTokenIcon = {
  [WrapUnwrapModeEnum.WRAP]: WTONTokenIcon,
  [WrapUnwrapModeEnum.UNWRAP]: TONTokenIcon,
};

export const ToTokenName = {
  [WrapUnwrapModeEnum.WRAP]: "WTON",
  [WrapUnwrapModeEnum.UNWRAP]: "TON",
};
