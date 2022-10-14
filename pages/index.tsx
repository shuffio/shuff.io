import type { NextPage } from "next";
import Head from "next/head";
import { Main, Navigation, Footer } from "@ui/modules";
import { Body, Container } from "@ui/primitives";

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

      {/* <Navigation />
      <Main />
      <Footer /> */}
      <Container>
        <Body>
          Welcome to the absolutely, brand-spanking new home for{" "}
          <strong>shuff.io</strong>!
        </Body>
      </Container>
    </>
  );
};

export default Home;
