import styled from "styled-components/macro";

interface WrappedModalProps {
  opened: boolean;
}

export const WrappedModal = styled.div<WrappedModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) => (opened ? "translate(-50%, -50%)" : "translate(-50%, -150%)")};
  z-index: 20;
  width: 90vw;
  height: 90vh;
  display: flex;
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visible" : "hidden")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.5em 3.5em var(--shadow);
  border-radius: 1em;
  padding: 3em 3em 4em 3em;
  transition: all 0.1s;
  color: black;
  padding: 1em 0;

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }
  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }

  .swiper-container {
    max-width: 100%;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -6px;
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

  .cancel {
    position: absolute;
    height: 3em;
    width: 3em;
    top: -2em;
    right: -2em;
    fill: white;
    :hover {
      cursor: pointer;
    }
  }

  .loader {
    fill: black;
    stroke: black;
  }

  @media (max-width: 760px) {
    .cancel {
      right: 0;
    }
  }
`;

export const ImageContent = styled.div<{ margin?: string }>`
  position: relative;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : null)};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 70vw;
  height: 85vh;
  margin-bottom: 1em;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 760px) {
    width: 95vw;
  }
`;
