import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactComponent as Stroke } from "../../assets/stroke.svg";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";
import { Specification } from "../../components/Specification/Specification";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import Rating from "../../components/UI/Rating/Rating";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BiHeart } from "react-icons/bi";
import {
  Avalibility,
  AvalibilityWrapper,
  BottomContentWrapper,
  BottomLeftContent,
  BottomRightNav,
  ButtonsWrapper,
  Content,
  Id,
  ImageContent,
  ImageWrapper,
  Info,
  LeftSection,
  MainContent,
  PriceTag,
  PriceWrapper,
  ProductId,
  ProductInformationWrapper,
  Reviews,
  ReviewText,
  RightLi,
  RightNav,
  RightSection,
  SmallerImageWrapper,
  WatchWrapper,
} from "../../layout/productLayout";
import { IProduct, IReviews } from "../../types";
import { twoDecimals } from "../../utils/format";
import { useThrottle } from "../../utils/helpers";

interface ProductProps {
  product: IProduct;
  relatedProducts: IProduct[];
  reviews: IReviews[];
  productId: string;
}

const Product: React.FC<ProductProps> = ({
  product,
  reviews,
  productId,
  relatedProducts,
}) => {
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}/${product.mainProductImage}`;
  const [specActive, setSpecActive] = useState(false);
  const [descActive, setDescActive] = useState(false);
  const [revActive, setRevActive] = useState(false);
  const [relActive, setRelActive] = useState(false);
  const [mySwiper, setMySwiper] = useState();
  const [reviewLimit, setReviewLimit] = useState(100);
  const [reviewSkip, setReviewSkip] = useState(4);
  const [watchesLimit, setWatchesLimit] = useState(30);
  const [watchesSkip, setWatchesSkip] = useState(4);
  const [watches, setWatches] = useState([...relatedProducts]);
  const [comments, setComments] = useState([...reviews]);
  const [slidesAmmount, setSlidesAmmount] = useState(2);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  const size = useWindowSize();
  const specRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const revRef = useRef<HTMLDivElement>(null);
  const relRef = useRef<HTMLDivElement>(null);
  const scrollThrottle = useThrottle(() => handleScroll(), 100);

  const handleClickScroll = (offset) => {
    window.scrollTo(0, offset + 500);
  };

  const handleRefetchComments = async (limit, skip) => {
    if (skip > limit) return;

    setReviewSkip(skip + 4);
    const { data } = await axios.get(
      `/api/products/reviews/${productId}?limit=${limit}&skip=${skip}`
    );
    setComments([...comments, ...data]);
  };

  const handleRefetchWatches = async (limit, skip) => {
    if (skip > limit) return;

    setWatchesSkip(skip + 4);
    const { data } = await axios.get(
      `/api/products/${router.query.id}?limit=${limit}&skip=${skip}`
    );
    setWatches([...watches, ...data]);
  };

  const handleScroll = () => {
    console.log("here");
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollThrottle, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollThrottle);
    };
  }, []);

  // Reseting all the state after route changes
  useEffect(() => {
    setWatches([...relatedProducts]);
    setComments([...reviews]);
    setReviewSkip(4);
    setWatchesSkip(4);
    if (mySwiper) {
      //@ts-ignore
      mySwiper.slideTo(0);
    }
  }, [reviews, relatedProducts]);

  useEffect(() => {
    size.width > 610 ? setSlidesAmmount(2) : setSlidesAmmount(1);
  }, [size]);

  useEffect(() => {
    if (
      scrollPosition >= specRef.current.offsetTop + 500 &&
      scrollPosition < descRef.current.offsetTop + 500
    ) {
      setSpecActive(true);
    } else {
      setSpecActive(false);
    }
    if (
      scrollPosition >= descRef.current.offsetTop + 500 &&
      scrollPosition < revRef.current.offsetTop + 500
    ) {
      setDescActive(true);
    } else {
      setDescActive(false);
    }
    if (
      scrollPosition >= revRef.current.offsetTop + 500 &&
      scrollPosition < relRef.current.offsetTop + 500
    ) {
      setRevActive(true);
    } else {
      setRevActive(false);
    }
    if (scrollPosition >= relRef.current.offsetTop + 500) {
      setRelActive(true);
    } else {
      setRelActive(false);
    }
  }, [scrollPosition]);

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Description of a specific watch" />
      </Head>
      <Header />
      <Content>
        <SideNavbar width="30em" />
        <MainContent>
          <ProductInformationWrapper>
            <LeftSection>
              <Heading color="#fff" size="h1" margin="">
                {product.name}
              </Heading>
              <Heading color="#fff" size="h3" margin="0 0 0.5em 0">
                {product.brand}
              </Heading>
              <ProductId>
                <Id>{product._id}</Id>
                <Rating rating={product.rating} rColor margin="0.2em 0 0 0 " />
                <p>({`${product.numReviews}`})</p>
              </ProductId>
            </LeftSection>

            <RightSection>
              <PriceWrapper>
                <Heading size="h2" margin="0 0 0.4em 0" color="#be6a15">
                  <PriceTag>${twoDecimals(product.price)}</PriceTag>
                </Heading>
                <Button
                  bColor="#be6a15"
                  margin="0 0 1em 2em"
                  padding="0.3em 3em"
                >
                  Add
                </Button>
              </PriceWrapper>
              <AvalibilityWrapper>
                Avalibility:{" "}
                {product.countInStock > 0 ? (
                  <Avalibility avalible={true}>Avalible</Avalibility>
                ) : (
                  <Avalibility avalible={false}>Not Avalible</Avalibility>
                )}
              </AvalibilityWrapper>
            </RightSection>
          </ProductInformationWrapper>
          <ImageContent>
            <ImageWrapper>
              <Image
                src={fullUrl}
                alt={`${product.name} image`}
                layout="fill"
                quality={100}
              ></Image>
            </ImageWrapper>
          </ImageContent>
          <BottomContentWrapper>
            <BottomLeftContent>
              <div ref={specRef}>
                <Heading color="#fff" size="h1" margin="0 0 0.5em 0">
                  Specification
                </Heading>
              </div>
              <Specification product={product} />

              <div ref={descRef}>
                <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
                  Description
                </Heading>
              </div>

              <div ref={revRef}>
                <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
                  Reviews
                </Heading>
              </div>

              {comments.map((review, index) => (
                <Reviews key={index}>
                  <Info>
                    <div>
                      <Heading color="#fff" size="h4" margin="0">
                        {review.username}
                      </Heading>
                      <p>
                        <Moment fromNow ago>
                          {review.createdAt}
                        </Moment>{" "}
                        ago
                      </p>
                    </div>
                    <Rating rating={review.rating} rColor="#be6a15" />
                  </Info>
                  <ReviewText>{review.body}</ReviewText>
                </Reviews>
              ))}
              <ButtonsWrapper>
                <Button
                  onClick={() => handleRefetchComments(reviewLimit, reviewSkip)}
                  padding="0.3em 3em"
                  bColor="#be6a15"
                >
                  More Reviews
                </Button>
                <Button padding="0.3em 3em">Add Comment</Button>
              </ButtonsWrapper>
              <div ref={relRef}>
                <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
                  Related Watches
                </Heading>
              </div>
              <WatchWrapper>
                <Swiper
                  tag="section"
                  wrapperTag="ul"
                  spaceBetween={0}
                  slidesPerView={slidesAmmount}
                  navigation
                  pagination
                  onSwiper={(swiper) => {
                    //@ts-ignore
                    setMySwiper(swiper);
                  }}
                  onSlideChange={(e) => {
                    if (e.isEnd) {
                      handleRefetchWatches(watchesLimit, watchesSkip);
                    }
                  }}
                >
                  {watches.map((watch) => (
                    <SwiperSlide tag="li" key={watch.name}>
                      <ImageContent margin="0 0 3em 0">
                        <SmallerImageWrapper>
                          <Link href={`/products/${watch._id}`}>
                            <a>
                              <Image
                                alt={`${watch.name} image`}
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${watch.mainProductImage}`}
                                layout="fill"
                                quality={100}
                              />
                            </a>
                          </Link>
                          <BiHeart />
                        </SmallerImageWrapper>
                        <Heading color="#fff" size="h3" margin="0 0.5em 0 0">
                          {watch.name}
                        </Heading>

                        <Heading size="h4" margin="0 0.5em 0 0" color="#be6a15">
                          <PriceTag>${twoDecimals(watch.price)}</PriceTag>
                        </Heading>

                        <Button
                          bColor="#be6a15"
                          margin="0 0.5em 0 0"
                          padding="0.3em 3em"
                        >
                          Add
                        </Button>
                      </ImageContent>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </WatchWrapper>
            </BottomLeftContent>
            <BottomRightNav>
              <RightNav>
                <RightLi
                  active={specActive}
                  onClick={() => handleClickScroll(specRef.current.offsetTop)}
                >
                  Specification
                </RightLi>
                <RightLi
                  active={descActive}
                  onClick={() => handleClickScroll(descRef.current.offsetTop)}
                >
                  Description
                </RightLi>
                <RightLi
                  active={revActive}
                  onClick={() => handleClickScroll(revRef.current.offsetTop)}
                >
                  Reviews
                </RightLi>
                <RightLi
                  active={relActive}
                  onClick={() => handleClickScroll(relRef.current.offsetTop)}
                >
                  Related Watches
                </RightLi>
                <Stroke className="stroke" />
                <Heading size="h2" margin="0.2em 0 0 0" color="#be6a15">
                  <PriceTag>${twoDecimals(product.price)}</PriceTag>
                </Heading>
                <ProductId>
                  <Rating
                    rating={product.rating}
                    rColor
                    margin="0.2em 0 0 0 "
                  />
                  <p>({`${product.numReviews}`})</p>
                </ProductId>
                <Button
                  bColor="#be6a15"
                  margin="2em 0 1em 0"
                  padding="0.3em 3em"
                >
                  Add
                </Button>
                Avalibility:{" "}
                {product.countInStock > 0 ? (
                  <Avalibility avalible={true}>Avalible</Avalibility>
                ) : (
                  <Avalibility avalible={false}>Not Avalible</Avalibility>
                )}
              </RightNav>
            </BottomRightNav>
          </BottomContentWrapper>

          <Footer />
        </MainContent>
      </Content>
    </>
  );
};

export async function getServerSideProps(context) {
  const { data: product } = await axios.get(
    `/api/products/${context.params.id}`
  );
  const { data: reviews } = await axios.get(
    `/api/products/reviews/${context.params.id}`
  );
  const { data: relatedProducts } = await axios.get(
    `/api/products/${context.params.id}?limit=4&skip=0`
  );

  return {
    props: {
      product,
      reviews,
      relatedProducts,
      productId: context.params.id,
    },
  };
}

export default Product;
