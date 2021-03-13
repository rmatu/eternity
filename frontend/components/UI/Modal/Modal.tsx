import React from "react";
import { WrappedModal } from "./styles";
import Backdrop from "./Backdrop/Backdrop";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  opened: boolean;
  close: () => void;
  children: React.ReactNode | React.ReactNode[];
}

//This will be rerender only if the props changes
const Modal: React.FC<ModalProps> = ({ opened, children, close }) => {
  return (
    <>
      <Backdrop opened={opened} close={close} />
      <WrappedModal opened={opened}>
        <AiOutlineClose className="cancel" onClick={close} />
        {children}
      </WrappedModal>
    </>
  );
};

export default Modal;
