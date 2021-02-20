import axios from "axios";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { SideNavbar } from "../../components/SideNavbar/SideNavbar";

const Product = ({ data }) => {
  return (
    <>
      <Head>
        <title>Eternity</title>
        <meta name="description" content="Description of a specific watch" />
      </Head>
      <Header />
      <SideNavbar />
    </>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(`/api/products/${context.params.id}`);

  return {
    props: {
      data,
    },
  };
}

export default Product;
