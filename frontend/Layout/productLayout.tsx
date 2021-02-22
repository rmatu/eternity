import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 7em);
  width: 100%;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
`;

export const ProductInformationWrapper = styled.section`
  margin: 5em 0 0 0;
  padding-bottom: 2em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6d6d6d;

  @media (max-width: 1200px) {
    margin: 5em 0 0 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div``;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 700px) {
    margin-top: 1em;
  }
`;

export const Id = styled.p`
  padding-right: 1em;
  margin-right: 1em;
  border-right: 1px solid #6d6d6d;
`;

export const ProductId = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 1em;
  }

  ${Id} {
    margin-left: 0;
  }
`;

export const Avalibility = styled.div<{ avalible: boolean }>`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ avalible }) => (avalible ? "#70a514" : "#ff5757")};
`;

export const AvalibilityWrapper = styled.div`
  margin-left: auto;

  @media (max-width: 700px) {
    margin-right: auto;
    margin-left: 0;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 850px) {
    width: calc(100vw - 4em);
    height: 500px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 700px;
  background: rgb(37, 44, 46);
  background: -moz-radial-gradient(
    circle,
    rgba(37, 44, 46, 1) 10%,
    rgba(0, 0, 0, 1) 60%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(37, 44, 46, 1) 10%,
    rgba(0, 0, 0, 1) 60%
  );
  background: radial-gradient(
    circle,
    rgba(37, 44, 46, 1) 10%,
    rgba(0, 0, 0, 1) 60%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#252c2e",endColorstr="#000000",GradientType=1);
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 1200px) {
    width: 400px;
    height: 600px;
  }

  @media (max-width: 850px) {
    height: 100%;
  }
`;

export const Specification = styled.ul`
  max-width: 100%;
  font-size: 1.2rem;
`;

export const SpecificationRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  border-bottom: 1px solid #6d6d6d;

  :last-of-type {
    border-bottom: none;
  }
`;

export const SpecificationItem = styled.li<{ bolder?: any }>`
  text-transform: capitalize;
  font-weight: ${({ bolder }) => (bolder ? "700" : "300")};
`;
