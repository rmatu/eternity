import { useState, useEffect } from "react";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { RiUserFollowLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Header } from "../components/Header/Header";
import Heading from "../components/UI/Heading/Heading";
import { useDispatch, useSelector } from "react-redux";
import { cleanUp, signin } from "../redux/user/userActions";
import Input from "../components/UI/Input/Input";
import {
  Content,
  IconWrapper,
  LoginForm,
  BottomTextWrapper,
  SpanWrapper,
  ButtonWrapper,
} from "../layout/loginLayout";
import Button from "../components/UI/Button/Button";
import { useRouter } from "next/router";
import { UserState } from "../redux/user/userTypes";
import { AppState } from "../redux/rootReducer";
import Popup from "../components/UI/Popup/Popup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(3, "The password is to short"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, error }: UserState = useSelector(
    (state: AppState) => state.user
  );

  useEffect(() => {
    if (user) {
      router.push((router.query.redirect as string) || "/account");
    }
  }, [user]);

  useEffect(() => {
    if (error !== null) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, []);

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
          validationSchema={SignInSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            await dispatch(signin(values.email, values.password));
          }}
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

              <ButtonWrapper>
                <Button
                  loading={isSubmitting ? "Sending..." : null}
                  disabled={!isValid}
                  type="submit"
                  bColor="#be6a15"
                  padding="0.2em 3em"
                  margin="1em 0 0 0"
                >
                  Login
                </Button>
              </ButtonWrapper>

              <BottomTextWrapper>
                <p>Don't have an account? </p>
                <Link href="/register">
                  <a>
                    <SpanWrapper bold>Sign up</SpanWrapper>
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

export default Login;
