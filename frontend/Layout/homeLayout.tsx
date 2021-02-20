import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 7em);
  width: 100%;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialIconsWrapper = styled.div`
  background-color: white;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
  opacity: 70%;

  :hover {
    opacity: 100%;
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    height: 1.5em;
    width: 1.5em;
  }
`;

export const MainContent = styled.div`
  display: flex;
  max-width: 1980px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    justify-content: flex-end;
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;
  }
`;

export const ImageContent = styled.div`
  margin-left: 5em;
  width: 500px;
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContent = styled.div`
  max-width: 400px;

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 850px) {
    max-width: 800px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 430px) {
  }
`;
