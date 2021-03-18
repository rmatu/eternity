import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { UserState } from "../redux/user/userTypes";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useRouter } from "next/router";
import PageLoader from "../components/PageLoader/PageLoader";
import { signOut } from "../redux/user/userActions";
import Button from "../components/UI/Button/Button";
import { fetchAllOrders } from "../redux/order/orderActions";

const Account = () => {
  const { user }: UserState = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
    if (user) {
      dispatch(fetchAllOrders());
    }
  }, [user]);

  if (!user) {
    return <PageLoader />;
  }

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Account page" />
      </Head>
      <Header />
      <p>You are logged in</p>
      <Button onClick={() => dispatch(signOut())}>Click</Button>
    </>
  );
};

export default Account;
