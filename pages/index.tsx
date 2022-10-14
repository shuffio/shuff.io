import type { NextPage } from "next";
import Head from "next/head";
import { Main, Navigation, Footer } from "@ui/modules";
import { brand } from "@ui/tokens/colors";
import { layout } from "@ui/tokens/shadows";
import { rem } from "@ui/tokens/spacing";
import { Layout, Container, Body } from "@ui/primitives";

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

      <Layout
        height="100vh"
        backgroundColor={brand.dark}
        horizontalPosition="center"
        verticalPosition="center"
      >
        <Container
          maxWidth="900px"
          backgroundColor={brand.light}
          style={{ boxShadow: layout.far }}
          padding={rem[40]}
        >
          <Body fontSize="28px">
            Welcome to the absolutely, brand-spanking new home for{" "}
            <strong>shuff.io</strong>!
          </Body>
          <br />
          <Body fontSize="20px">
            We&apos;re working hard behind the scenes to bring a super cool
            experience to shuffleboard fans everywhere. Check back soon and
            maybe something new will be here!
          </Body>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
