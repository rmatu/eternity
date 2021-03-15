import React from "react";
import { twoDecimals } from "../../../utils/format";
import { Wrapper, ActualPrice, PrevPrice } from "./styles";

interface PriceProps {
  price: number;
  prevPrice?: number | null;
  prevFontSize?: string;
  actualFontSize?: string;
  fontWeight?: string;
  margin?: string;
  row?: boolean;
}

const Price: React.FC<PriceProps> = ({ price, prevPrice, margin, fontWeight, prevFontSize, actualFontSize, row }) => {
  return (
    <Wrapper
      fontWeight={fontWeight}
      margin={margin}
      prevFontSize={prevFontSize}
      actualFontSize={actualFontSize}
      row={row}
    >
      <ActualPrice>${twoDecimals(price)}</ActualPrice>
      {prevPrice && <PrevPrice row={row}>${twoDecimals(prevPrice)}</PrevPrice>}
    </Wrapper>
  );
};
export default Price;
