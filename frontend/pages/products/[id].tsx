import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Stroke } from "../../assets/stroke.svg";
import AddComment from "../../components/AddComment/AddComment";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";
import { Specification } from "../../components/Specification/Specification";
import Button from "../../components/UI/Button/Button";
import Favorite from "../../components/UI/Favorite/Favorite";
import Heading from "../../components/UI/Heading/Heading";
import Popup from "../../components/UI/Popup/Popup";
import Rating from "../../components/UI/Rating/Rating";
import { localStorageNames } from "../../constants";
import { useWindowSize } from "../../hooks/useWindowSize";
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
import { AppState } from "../../redux/rootReducer";
import { UserState } from "../../redux/user/userTypes";
import { IProduct, IReviews } from "../../types";
import { twoDecimals } from "../../utils/format";
import { useThrottle } from "../../utils/helpers";
import { dispatchToPlace } from "../../utils/reduxHelpers";
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
  const [showComment, setShowComment] = useState<boolean>(false);
  const [specActive, setSpecActive] = useState<boolean>(false);
  const [descActive, setDescActive] = useState<boolean>(false);
  const [revActive, setRevActive] = useState<boolean>(false);
  const [relActive, setRelActive] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [mySwiper, setMySwiper] = useState();
  const [reviewLimit, setReviewLimit] = useState<number>(100);
  const [reviewSkip, setReviewSkip] = useState<number>(4);
  const [watchesLimit, setWatchesLimit] = useState<number>(30);
  const [watchesSkip, setWatchesSkip] = useState<number>(4);
  const [watches, setWatches] = useState([...relatedProducts]);
  const [comments, setComments] = useState([...reviews]);
  const [slidesAmmount, setSlidesAmmount] = useState<number>(2);
  const [mainSlidesAmmount, setMainSlidesAmmount] = useState<number>(3);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const router = useRouter();
  const size = useWindowSize();
  const dispatch = useDispatch();

  const specRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const revRef = useRef<HTMLDivElement>(null);
  const relRef = useRef<HTMLDivElement>(null);
  const scrollThrottle = useThrottle(() => handleScroll(), 100);

  const { user }: UserState = useSelector((state: AppState) => state.user);

  const handleClickScroll = (offset) => {
    window.scrollTo(0, offset + 500);
  };

  const handleRefetchComments = async (limit, skip) => {
    if (skip > limit) return;

    setReviewSkip(skip + 4);
    const { data } = await axios.get(
      `/api/products/${productId}/reviews/?limit=${limit}&skip=${skip}`
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
    size.width > 610 ? setMainSlidesAmmount(3) : setMainSlidesAmmount(2);
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
                  onClick={() => {
                    setShowPopup(true);
                    setTimeout(() => {
                      setShowPopup(false);
                    }, 5000);
                    dispatchToPlace(
                      product._id,
                      localStorageNames.CART_ITEMS,
                      dispatch
                    );
                  }}
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
              />
            </ImageWrapper>
            <Favorite
              productId={product._id}
              onClick={() => {
                dispatchToPlace(
                  product._id,
                  localStorageNames.FAVORITES,
                  dispatch
                );
              }}
            />
          </ImageContent>

          {/* <Swiper
            tag="section"
            wrapperTag="ul"
            spaceBetween={20}
            navigation
            pagination
            slidesPerView={mainSlidesAmmount}
          >
            {product.restImages.map((imagePath) => (
              <SwiperSlide key={imagePath} tag="li">
                <CarouselImages>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${imagePath}`}
                    alt={`${product.name} thumb screen`}
                    layout="fill"
                    quality={100}
                  />
                </CarouselImages>
              </SwiperSlide>
            ))}
            <br />
          </Swiper> */}
          <BottomContentWrapper>
            <BottomLeftContent>
              <div ref={specRef}>
                <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
                  Specification
                </Heading>
              </div>
              <Specification product={product} />

              <div ref={descRef}>
                <Heading color="#fff" size="h1" margin="1em 0 0.5em 0">
                  Description
                </Heading>
                {product.description}
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
                        {review.name}
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
                <Button
                  onClick={() => {
                    if (!user) {
                      router.push(
                        `/login?redirect=products/${router.query.id}`
                      );
                    } else {
                      setShowComment(!showComment);
                    }
                  }}
                  padding="0.3em 3em"
                >
                  Add Comment
                </Button>
              </ButtonsWrapper>
              <AddComment
                productId={router.query.id as string}
                visible={showComment}
              />
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
                          <Favorite
                            productId={watch._id}
                            onClick={() => {
                              dispatchToPlace(
                                watch._id,
                                localStorageNames.FAVORITES,
                                dispatch
                              );
                            }}
                          />
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
                          onClick={() => {
                            setShowPopup(true);
                            setTimeout(() => {
                              setShowPopup(false);
                            }, 5000);
                            dispatchToPlace(
                              watch._id,
                              localStorageNames.CART_ITEMS,
                              dispatch
                            );
                          }}
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
                  onClick={() => {
                    dispatchToPlace(
                      product._id,
                      localStorageNames.CART_ITEMS,
                      dispatch
                    );
                  }}
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
      <Popup showPopup={showPopup}>Item added to cart successfully!</Popup>
    </>
  );
};

export async function getServerSideProps(context) {
  const { data: product } = await axios.get(
    `/api/products/${context.params.id}`
  );
  const { data: reviews } = await axios.get(
    `/api/products/${context.params.id}/reviews`
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
