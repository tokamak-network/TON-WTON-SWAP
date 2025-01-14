import { LoadingModalComponent } from "./LoadingModal";
import { TransactionConfirmModalComponent } from "./TransactionConfirmModal";

export const Modal: React.FC = () => {
  return (
    <>
      <LoadingModalComponent />
      <TransactionConfirmModalComponent />
    </>
  );
};
