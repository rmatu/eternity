import Head from "next/head";
import { Header } from "../components/Header/Header";

const Register = () => {
  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Login page" />
      </Head>
      <Header />
      <p>Register</p>
    </>
  );
};

export default Register;
