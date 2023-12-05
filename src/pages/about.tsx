import Layout from "@/components/Layout/Layout";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { redirectBasedOnToken } from "@/helpers/auth-redirect";
import About from "@/components/About/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return redirectBasedOnToken(context, false);
};