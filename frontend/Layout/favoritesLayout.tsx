import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const FavoritesWrapper = styled.div`
  width: 85%;
  justify-content: center;
  align-items: center;
`;

export const ProductsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex: 0 0 33.3333%;
  }

  @media (max-width: 1320px) {
    & > * {
      flex: 0 50%;
    }
  }

  @media (max-width: 860px) {
    & > * {
      flex: 100%;
    }
  }
`;

export const ImageContent = styled.div<{ margin?: string }>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 350px;
  margin: ${({ margin }) => (margin ? margin : null)};

  svg {
    transition: all 0.2s;
    position: absolute;
    height: 2em;
    width: 2em;
    top: 3em;
    right: 3em;

    :hover {
      cursor: pointer;
      fill: #be6a15;
      stroke: #be6a15;
    }
  }

  @media (max-width: 700px) {
    svg {
      top: 1em;
      right: 1em;
    }
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 1em;
  margin-bottom: 3em;
  position: relative;
  transition: all 0.2s;
  width: 300px;
  height: 350px;
  background: rgb(37, 44, 46);
  background: -moz-radial-gradient(circle, rgba(37, 44, 46, 1) 20%, rgba(0, 0, 0, 1) 53%);
  background: -webkit-radial-gradient(circle, rgba(37, 44, 46, 1) 20%, rgba(0, 0, 0, 1) 53%);
  background: radial-gradient(circle, rgba(37, 44, 46, 1) 20%, rgba(0, 0, 0, 1) 53%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#252c2e",endColorstr="#000000",GradientType=1);

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }

  svg {
    transition: all 0.2s;
    position: absolute;
    right: 2em;
    top: 2em;
    height: 2em;
    width: 2em;

    :hover {
      fill: #be6a15;
      stroke: #be6a15;
      cursor: pointer;
    }
  }

  :hover {
    transform: scale(1.02);
  }

  @media (max-width: 850px) {
    width: 300px;
    height: 400px;
  }
`;

export const SortOptions = styled.ul<{ active?: boolean }>`
  display: flex;
  position: sticky;
  top: 8em;
  position: -webkit-sticky;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 3em;
  width: 15em;
`;

export const Option = styled.li<{ active?: boolean }>`
  transition: all 0.1s;

  p {
    cursor: pointer;
    color: ${({ active }) => (active ? "#e6811c" : "")};
    padding: 0.4em 0;
    font-size: 1.1rem;

    :hover {
      color: #eb841e;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;
