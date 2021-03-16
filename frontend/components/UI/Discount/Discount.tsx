import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";

interface DiscountProps {
  price: number;
  prevPrice: number;
}

const Discount: React.FC<DiscountProps> = ({ price, prevPrice }) => {
  const [discountPrice, setDiscountPrice] = useState<number>(0);

  useEffect(() => {
    const discount = +((price * 100) / prevPrice).toFixed();
    setDiscountPrice(100 - discount);
  }, []);

  return discountPrice > 0 && <Wrapper>-{discountPrice}%</Wrapper>;
};
export default Discount;
