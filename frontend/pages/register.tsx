import { useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/UI/Input/Input";
import Heading from "../components/UI/Heading/Heading";
import Popup from "../components/UI/Popup/Popup";
import { UserState } from "../redux/user/userTypes";
import { AppState } from "../redux/rootReducer";
import {
  Content,
  IconWrapper,
  LoginForm,
  BottomTextWrapper,
  SpanWrapper,
  ButtonWrapper,
} from "../layout/loginLayout";
import { RiUserFollowLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../components/UI/Button/Button";
import Link from "next/link";

export const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Your name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(1, "The password is to short"),
  confirmPassword: Yup.string()
    //Getting the reference to the password
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("Confirm your password."),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const { user, error }: UserState = useSelector(
    (state: AppState) => state.user
  );

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Login page" />
      </Head>
      <Header />
      <Content>
        <Formik
          isInitialValid={false}
          validationSchema={SignUpSchema}
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {}}
        >
          {({ isSubmitting, isValid, setFieldValue }) => (
            <LoginForm>
              <IconWrapper>
                <RiUserFollowLine />
              </IconWrapper>
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
                Name
              </Heading>
              <Field
                type="name"
                name="name"
                placeholder="Your name..."
                component={Input}
              />
              <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                Password
              </Heading>

              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password..."
                component={Input}
              >
                {showPassword ? (
                  <AiOutlineEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </Field>
              <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                Confirm Password
              </Heading>

              <Field
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password..."
                component={Input}
              >
                {showConfirmPassword ? (
                  <AiOutlineEye
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                  />
                )}
              </Field>

              <ButtonWrapper>
                <Button
                  loading={isSubmitting ? "Registering..." : null}
                  disabled={!isValid}
                  type="submit"
                  bColor="#be6a15"
                  padding="0.2em 3em"
                  margin="1em 0 0 0"
                >
                  Register
                </Button>
              </ButtonWrapper>

              <BottomTextWrapper>
                <p>Already have an account? </p>
                <Link href="/login">
                  <a>
                    <SpanWrapper bold>Sign in</SpanWrapper>
                  </a>
                </Link>
              </BottomTextWrapper>
            </LoginForm>
          )}
        </Formik>
        <Popup error={true} showPopup={showPopup}>
          {error}
        </Popup>
      </Content>
    </>
  );
};

export default Register;
