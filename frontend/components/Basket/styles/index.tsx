import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: calc(100vh - 28em);
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

  p {
    font-size: 1.1em;
  }
`;

export const Product = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 55%;
`;

export const InfoItem = styled.div``;

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
  padding-right: 5.7em;

  p {
    font-size: 1.1rem;
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
