import { useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { UserState } from "../redux/user/userTypes";
import { useSelector } from "react-redux";
import { AppState } from "../redux/rootReducer";
import { useRouter } from "next/router";
import Loader from "../components/UI/Loader/Loader";

const Account = () => {
  const { user }: UserState = useSelector((state: AppState) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  if (!user) {
    return (
      <>
        <Head>
          <title>Eternity</title>
          <meta name="description" content="Account page" />
        </Head>
        <Header />
        <div
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Account page" />
      </Head>
      <Header />
      <p>You are logged in</p>
    </>
  );
};

export default Account;
