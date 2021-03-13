import Head from "next/head";
import { Header } from "../Header/Header";
import Heading from "../UI/Heading/Heading";
import { Content } from "./styles";
import { HiCheckCircle } from "react-icons/hi";
import Button from "../UI/Button/Button";
import { useRouter } from "next/router";

interface PaymentSucceededProps {}

const PaymentSucceeded: React.FC<PaymentSucceededProps> = ({}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta
          name="Payment Succeeded"
          content="User successfully bought his items"
        />
      </Head>
      <Header />
      <Content>
        <HiCheckCircle />
        <Heading size="h1" color="#fff">
          Your purchase was successful!
        </Heading>
        <Button onClick={() => router.push("/")} margin="0.5em 0">
          Continue Shopping
        </Button>
      </Content>
    </>
  );
};

export default PaymentSucceeded;
