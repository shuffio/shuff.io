import type { NextPage } from "next";
import Head from "next/head";
import { Main, Navigation, Footer } from "@ui/modules";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>shuff.io</title>
        <meta
          name="description"
          content="your one-stop shop for hot shuff gossip"
        />
      </Head>

      <Navigation />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
