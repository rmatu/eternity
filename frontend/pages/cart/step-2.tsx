import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import SideCartNav from "../../components/SideCartNav/SideCartNav";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import { Content, LogginWrapper, RowButtons } from "../../layout/cartLayout";
import { setStep } from "../../redux/cart/cartActions";
import { CartState } from "../../redux/cart/cartTypes";
import { AppState } from "../../redux/rootReducer";
import { UserState } from "../../redux/user/userTypes";
import { useRouter } from "next/router";
import Footer from "../../components/Footer/Footer";

const Step2 = () => {
  const { step }: CartState = useSelector((state: AppState) => state.cart);
  const { user }: UserState = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (step === 1) {
      dispatch(setStep(2));
    } else {
      router.push("/cart/step-1");
    }
  }, []);

  if (!user) {
    return (
      <>
        <Head>
          <title>Eternity</title>
          <meta name="Cart" content="User's cart" />
        </Head>
        <Header />
        <Content>
          <SideCartNav step={step} />
          <LogginWrapper>
            <Heading size="h1" color="#fff">
              You are not logged in...
            </Heading>
            <p>Sign in to save your order information on your account.</p>
            <RowButtons>
              <Button onClick={() => router.push("/cart/step-3")} margin="0.5em" bColor="#be6a15">
                Continue
              </Button>
              <Button onClick={() => router.push("/login?redirect=cart/step-3")} margin="0.5em" bColor="#be6a15">
                Sign in
              </Button>
            </RowButtons>
          </LogginWrapper>
        </Content>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <SideCartNav step={step} />
        <LogginWrapper>
          <Heading size="h1" color="#fff">
            You are logged in.
          </Heading>
          <p>All your order information will be saved on your account.</p>
          <div>
            <Button onClick={() => router.push("/cart/step-3")} margin="1em 0 0 0 " bColor="#be6a15">
              Continue
            </Button>
          </div>
        </LogginWrapper>
      </Content>
    </>
  );
};

export default Step2;
