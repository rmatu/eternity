import React from "react";
import { Wrapper } from "./styles";

interface PopupProps {
  showPopup: boolean;
  success?: boolean | null;
  error?: boolean | null;
}

const Popup: React.FC<PopupProps> = ({
  showPopup,
  success,
  error,
  children,
}) => {
  return (
    <Wrapper success={success} error={error} showPopup={showPopup}>
      {children}
    </Wrapper>
  );
};
export default Popup;
