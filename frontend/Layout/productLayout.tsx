import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 7em);
  width: 100%;
`;

export const MainContent = styled.div`
  width: 100%;
`;

export const ProductInformationWrapper = styled.section`
  margin: 5em 5em 0 0;
  padding-bottom: 2em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6d6d6d;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 5em 0 0 0;
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
