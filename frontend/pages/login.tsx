import { useState } from "react";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { RiUserFollowLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Header } from "../components/Header/Header";
import Heading from "../components/UI/Heading/Heading";
import { useDispatch } from "react-redux";
import { signin } from "../redux/user/userActions";
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

const SignInSchema = Yup.object().shape({
  username: Yup.string().required("Username or email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(3, "The password is to short"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

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
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            await dispatch(signin(values.username, values.password));
          }}
        >
          {({ isSubmitting, isValid, setFieldValue }) => (
            <LoginForm>
              <IconWrapper>
                <RiUserFollowLine />
              </IconWrapper>
              <Heading size="h4" margin="0 0 0.3em 0.4em" color="#fff">
                Username
              </Heading>
              <Field
                type="text"
                name="username"
                placeholder="Your username..."
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
      </Content>
    </>
  );
};

export default Login;
