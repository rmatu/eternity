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

  @media (max-width: 674px) {
    height: calc(100vh - 32em);
  }

  @media (max-width: 500px) {
    padding-right: 1em;
    height: calc(100vh - 26em);
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

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Product = styled.div<{ mLeft?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ mLeft }) => mLeft};
  margin-right: 0.5em;
  p {
    font-size: 1.5rem;
    color: #fff;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 1em;
    margin-right: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 55%;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

interface InfoProps {
  orange?: boolean;
  trash?: boolean;
  weight?: string;
}

export const InfoItem = styled.div<InfoProps>`
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

  @media (max-width: 1000px) {
    justify-content: space-between;
    width: 100%;

    p {
      font-weight: 500;
    }

    padding: 0.5em 0;
  }
`;

export const ImageWrapper = styled.div`
  transition: all 0.1s ease-in-out;
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
  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 250px;
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

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const BottomRow = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    display: inline-block;
  }

  @media (max-width: 674px) {
    flex-direction: column;
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

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

export const ItemsCount = styled.p`
  margin-left: 0.3em;
  display: inline-block;
  font-size: 3.25rem;
  font-weight: 100;
`;

export const PriceWrapper = styled.h1`
  margin-left: 0.1em;
  color: #be6a15;
  font-size: 3.25rem;
`;

export const MobileInfo = styled.div`
  @media (min-width: 1000px) {
    font-size: 1.3rem;
    display: none;
  }
`;

export const BottomRowInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    h1,
    p {
      font-size: 2rem;
    }
  }
`;

export const HeaderWrapper = styled.div`
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
      margin-top: 0.5em;
      margin-bottom: 0;
    }
  }
`;
