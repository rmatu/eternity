import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import {
  Content,
  ShippingWrapper,
  ShippingForm,
  IconWrapper,
  SpanWrapper,
  ButtonWrapper,
  BottomTextWrapper,
} from "../../layout/cartLayout";
import SideCartNav from "../../components/SideCartNav/SideCartNav";

import { AppState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { CartState } from "../../redux/cart/cartTypes";
import { saveShippingAddress, setStep } from "../../redux/cart/cartActions";
import { Field, Formik } from "formik";
import Heading from "../../components/UI/Heading/Heading";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import * as Yup from "yup";

const ShippingSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required."),
  address: Yup.string().required("Address is required."),
  city: Yup.string().required("City is required."),
  postalCode: Yup.string().required("Postal Code is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string().email().required("Email is required"),
});

const Step2 = () => {
  const { step }: CartState = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStep(2));
  }, []);

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="Cart" content="User's cart" />
      </Head>
      <Header />
      <Content>
        <SideCartNav step={step} />
        <ShippingWrapper>
          <Formik
            isInitialValid={false}
            validationSchema={ShippingSchema}
            initialValues={{
              fullName: "",
              address: "",
              city: "",
              postalCode: "",
              country: "",
              email: "",
            }}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              console.log(values);
              dispatch(saveShippingAddress(values));
            }}
          >
            {({ isSubmitting, isValid, setFieldValue }) => (
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

export default Step2;
