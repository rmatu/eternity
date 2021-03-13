import { Field, Formik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Header } from "../../components/Header/Header";
import SideCartNav from "../../components/SideCartNav/SideCartNav";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import Input from "../../components/UI/Input/Input";
import {
  ButtonWrapper,
  Content,
  ShippingForm,
  ShippingWrapper,
} from "../../layout/cartLayout";
import { saveShippingAddress, setStep } from "../../redux/cart/cartActions";
import { CartState } from "../../redux/cart/cartTypes";
import { AppState } from "../../redux/rootReducer";

const ShippingSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required."),
  address: Yup.string().required("Address is required."),
  city: Yup.string().required("City is required."),
  postalCode: Yup.string().required("Postal Code is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string().email().required("Email is required"),
});

const Step3 = () => {
  const { step, shippingAddress }: CartState = useSelector(
    (state: AppState) => state.cart
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (step === 2) {
      dispatch(setStep(3));
    } else {
      router.push("/cart/step-1");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's shipping information" />
      </Head>
      <Header />
      <Content>
        <SideCartNav step={step} />
        <ShippingWrapper>
          <Formik
            validationSchema={ShippingSchema}
            initialValues={shippingAddress}
            onSubmit={async (values) => {
              dispatch(saveShippingAddress(values));
              router.push("/cart/step-4");
            }}
          >
            {({ isSubmitting, isValid }) => (
              <ShippingForm>
                <Heading size="h1" margin="0 0 1em 0" color="#fff">
                  Shipping Address
                </Heading>
                <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                  Full Name
                </Heading>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="Your first name and last name..."
                  component={Input}
                />
                <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                  Email
                </Heading>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  component={Input}
                />
                <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                  Address
                </Heading>
                <Field
                  type="address"
                  name="address"
                  placeholder="Your address..."
                  component={Input}
                />
                <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                  City
                </Heading>
                <Field
                  type="city"
                  name="city"
                  placeholder="Your city..."
                  component={Input}
                />
                <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                  Postal Code
                </Heading>
                <Field
                  type="postalCode"
                  name="postalCode"
                  placeholder="Your postal code..."
                  component={Input}
                />
                <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                  Country
                </Heading>
                <Field
                  type="country"
                  name="country"
                  placeholder="Your country..."
                  component={Input}
                />

                <ButtonWrapper>
                  <Button
                    loading={isSubmitting ? "Sending..." : null}
                    disabled={!isValid}
                    type="submit"
                    bColor="#be6a15"
                    padding="0.2em 3em"
                    margin="1em 0 0 0"
                  >
                    Continue
                  </Button>
                </ButtonWrapper>
              </ShippingForm>
            )}
          </Formik>
        </ShippingWrapper>
      </Content>
    </>
  );
};

export default Step3;
