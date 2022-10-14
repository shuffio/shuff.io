import type { NextPage } from "next";
import Head from "next/head";
import { brand } from "@ui/tokens/colors";
import { layout } from "@ui/tokens/spacing";
import { rem } from "@ui/tokens/spacing";
import { Layout, Container } from "@ui/primitives/layout";
import { Body, Headline } from "@ui/primitives/typography";

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
        background={`linear-gradient(${brand.secondary} 0%, ${brand.primary} 10%, ${brand.light} 50%)`}
        horizontalPosition="left"
        verticalPosition="center"
      >
        <Container maxWidth={layout.maxWidth} padding={rem[40]}>
          <Headline margin={`0 0 ${rem[40]}`}>
            Welcome to the absolutely, brand-spanking new home for{" "}
            <strong
              style={{
                // color: brand.tertiary,
                textShadow: `2px 2px 0 ${brand.light}, 4px 4px 0 ${brand.secondary}`,
              }}
            >
              shuff.io
            </strong>
            !
          </Headline>
          <Body fontSize="22px" maxWidth="820px">
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
