import Head from "next/head";
import React from "react";
import { Header } from "../components/Header/Header";

interface searchProps {}

const Search: React.FC<searchProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="order" content="User's order details" />
      </Head>
      <Header />
    </>
  );
};

// export async function getServerSideProps() {
//   return {};
// }

export default Search;
