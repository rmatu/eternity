import React from "react";
import { IProduct } from "../../types";
import {
  SpecificationWrapper,
  SpecificationItem,
  SpecificationRow,
} from "./styles";

interface SpecificationProps {
  product: IProduct;
}

export const Specification: React.FC<SpecificationProps> = ({
  product: { specification },
}) => {
  return (
    <SpecificationWrapper>
      <SpecificationRow>
        <SpecificationItem>Sex</SpecificationItem>
        <SpecificationItem bolder>{specification.sex}</SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Buckle/Clasp</SpecificationItem>
        <SpecificationItem bolder>{specification.claspType}</SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Case Size</SpecificationItem>
        <SpecificationItem bolder>{specification.caseSize}</SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Brand Color</SpecificationItem>
        <SpecificationItem bolder>{specification.brandColor}</SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Case Width</SpecificationItem>
        <SpecificationItem bolder>
          {specification.caseWidth} mm
        </SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Crystal/Lens</SpecificationItem>
        <SpecificationItem bolder>{specification.lensType}</SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Case Finish</SpecificationItem>
        <SpecificationItem bolder>{specification.caseFinish}</SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Watch Movement</SpecificationItem>
        <SpecificationItem bolder>
          {specification.watchMovement}
        </SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Water Resistance</SpecificationItem>
        <SpecificationItem bolder>
          {specification.waterResistance} meters
        </SpecificationItem>
      </SpecificationRow>
      <SpecificationRow>
        <SpecificationItem>Strap and Lug Width</SpecificationItem>
        <SpecificationItem bolder>
          {specification.strapAndLugWidth} mm
        </SpecificationItem>
      </SpecificationRow>
    </SpecificationWrapper>
  );
};
