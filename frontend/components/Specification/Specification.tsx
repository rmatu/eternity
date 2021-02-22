import React from "react";
import { IProduct } from "../../types";
import { Wrapper, Item, Row } from "./styles";

interface SpecificationProps {
  product: IProduct;
}

export const Specification: React.FC<SpecificationProps> = ({
  product: { specification },
}) => {
  return (
    <Wrapper>
      <Row>
        <Item>Sex</Item>
        <Item bolder>{specification.sex}</Item>
      </Row>
      <Row>
        <Item>Buckle/Clasp</Item>
        <Item bolder>{specification.claspType}</Item>
      </Row>
      <Row>
        <Item>Case Size</Item>
        <Item bolder>{specification.caseSize}</Item>
      </Row>
      <Row>
        <Item>Brand Color</Item>
        <Item bolder>{specification.brandColor}</Item>
      </Row>
      <Row>
        <Item>Case Width</Item>
        <Item bolder>{specification.caseWidth} mm</Item>
      </Row>
      <Row>
        <Item>Crystal/Lens</Item>
        <Item bolder>{specification.lensType}</Item>
      </Row>
      <Row>
        <Item>Case Finish</Item>
        <Item bolder>{specification.caseFinish}</Item>
      </Row>
      <Row>
        <Item>Watch Movement</Item>
        <Item bolder>{specification.watchMovement}</Item>
      </Row>
      <Row>
        <Item>Water Resistance</Item>
        <Item bolder>{specification.waterResistance} meters</Item>
      </Row>
      <Row>
        <Item>Strap and Lug Width</Item>
        <Item bolder>{specification.strapAndLugWidth}</Item>
      </Row>
    </Wrapper>
  );
};
