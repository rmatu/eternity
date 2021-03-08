import Head from "next/head";
import React from "react";
import { Header } from "../Header/Header";
import Loader from "../UI/Loader/Loader";

interface PageLoaderProps {}

const PageLoader: React.FC<PageLoaderProps> = ({}) => {
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
};
export default PageLoader;
