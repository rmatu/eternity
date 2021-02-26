import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 7em);
  width: 100%;

  .swiper-container {
    width: 100%;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0px;
  }

  .swiper-pagination-bullet {
    background-color: white;
  }

  .swiper-button-next {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: none;
    border-left: 10px solid white;
    border-bottom: 10px solid transparent;

    @media (max-width: 850px) {
      display: none;
    }
  }

  .swiper-button-prev {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid white;
    border-left: none;
    border-bottom: 10px solid transparent;

    @media (max-width: 850px) {
      display: none;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1400px) {
    padding-left: 5em;
  }

  @media (max-width: 1200px) {
    padding-left: 0;
  }
`;

export const ProductInformationWrapper = styled.section`
  margin-top: 0;
  padding: 2em 0;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #6d6d6d;

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
    margin-left: 0.5em;
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

  p {
    margin-right: 0.5em;
  }

  @media (max-width: 700px) {
    margin-right: auto;
    margin-left: 0;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7em;

  @media (max-width: 700px) {
    justify-content: space-between;
    margin-top: 0;
  }
`;

export const ImageContent = styled.div<{ margin?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : null)};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
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

export const Reviews = styled.div`
  padding: 2em 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :first-child {
    margin-bottom: 1em;
  }

  p {
    color: #a5a4a4;
  }
`;

export const ReviewText = styled.div`
  font-size: 1.125rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    button {
      margin-bottom: 1em;
    }
  }
`;

export const WatchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2em;
  position: relative;

  :first-of-type {
    position: absolute;
    width: 50px;
    height: 50px;
  }

  h3 {
    font-weight: 700;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const SmallerImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
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
  transition: all 0.2s;

  :hover {
    transform: scale(1.02);
  }

  @media (max-width: 850px) {
    width: 300px;
    height: 400px;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  left: 0;
  top: 35%;
  height: 50px;
  width: 50px;
  z-index: 10;

  svg {
    width: 100%;
    height: 100%;
    color: #a5a4a4;
    cursor: pointer;

    :hover {
      color: #fff;
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 0;
  top: 35%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  z-index: 10;

  svg {
    transition: all 0.1s;
    width: 100%;
    height: 100%;
    color: #a5a4a4;

    :hover {
      color: #fff;
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const BottomContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const BottomLeftContent = styled.div`
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const BottomRightNav = styled.nav`
  width: 15%;
  margin-top: 6em;

  h4 {
    font-weight: 300;
    padding: 0.3em 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const RightNav = styled.ul`
  position: sticky;
  position: -webkit-sticky;
  top: 300px;

  .stroke {
    width: 90%;
  }
`;

export const RightLi = styled.li<{ active: boolean }>`
  font-size: 1.5rem;
  padding: 0.3em 0;
  transition: all 0.1s;

  color: ${({ active }) => (active ? "#fff" : "#a5a4a4")};

  :hover {
    color: white;
    cursor: pointer;
  }
`;

export const PriceTag = styled.span`
  font-style: italic;
`;
