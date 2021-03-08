import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: calc(100vh - 26em);
  padding-right: 5em;

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 0 0 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 0 0 8px;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 0;
  border-bottom: 1px solid #3f3f3f;

  :last-of-type {
    border-bottom: none;
  }

  p {
    font-size: 1.3em;
    font-weight: 500;
  }
`;

export const Product = styled.div<{ mLeft?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ mLeft }) => mLeft};
  p {
    font-size: 1.5rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 55%;
`;

export const InfoItem = styled.div<{
  orange?: boolean;
  trash?: boolean;
  weight?: string;
}>`
  display: flex;
  align-items: center;

  p {
    color: ${({ orange }) => (orange ? "#be6a15" : "#fff")};
    font-weight: ${({ weight }) => weight};
  }

  svg {
    transition: all 0.1s;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;

    :hover {
      fill: ${({ trash }) => (trash ? "#ff5757" : "#be6a15")};
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  background: rgb(37, 44, 46);
  background: -moz-radial-gradient(
    circle,
    rgba(37, 44, 46, 1) 20%,
    rgba(0, 0, 0, 1) 53%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(37, 44, 46, 1) 20%,
    rgba(0, 0, 0, 1) 53%
  );
  background: radial-gradient(
    circle,
    rgba(37, 44, 46, 1) 20%,
    rgba(0, 0, 0, 1) 53%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#252c2e",endColorstr="#000000",GradientType=1);
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 1em 0;
  padding-right: 4.5em;

  p {
    font-size: 1.5rem;
  }
`;

export const BottomRow = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  h1 {
    display: inline-block;
  }
`;

export const QtyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    :first-of-type {
      margin-right: 1em;
    }
    :last-of-type {
      margin-left: 1em;
    }
  }
`;

export const ProductInfo = styled.div`
  margin-left: 2em;
`;

export const ItemsCount = styled.p`
  margin-left: 0.3em;
  display: inline-block;
  font-size: 3.25rem;
  font-weight: 100;
`;

export const PriceWrapper = styled.h1`
  color: #be6a15;
  font-size: 3.25rem;
`;
