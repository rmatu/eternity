import React from "react";
import { WrappedModal, ImageContent, ImageWrapper } from "./styles";
import Backdrop from "./Backdrop/Backdrop";
import { AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Props {
  opened: boolean;
  close: () => void;
  imagesUrls: string[];
}

//This will be rerender only if the props changes
const FullScreenImagesModal: React.FC<Props> = ({ opened, close, imagesUrls }) => {
  return (
    <>
      <Backdrop opened={opened} close={close} />
      <WrappedModal opened={opened}>
        <AiOutlineClose className="cancel" onClick={close} />
        <Swiper tag="section" wrapperTag="ul" spaceBetween={30} slidesPerView={1} navigation pagination>
          {imagesUrls.map((url) => (
            <SwiperSlide tag="li" key={url}>
              <ImageContent>
                <ImageWrapper>
                  <Image src={url} alt={`image`} layout="fill" quality={100}></Image>
                </ImageWrapper>
              </ImageContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </WrappedModal>
    </>
  );
};

export default FullScreenImagesModal;
