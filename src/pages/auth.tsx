import Layout from "@/components/Layout/Layout";
import Auth from "@/components/Auth/Auth";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { redirectBasedOnToken } from "@/helpers/auth-redirect";
import { redirectFirstUsers } from "@/helpers/user-redirect";

export default function AuthPage() {
  return (
    <>
      <Head>
        <title>Authentication</title>
      </Head>
      <Layout>
        <Auth />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirectBasedOnTokenResult = redirectBasedOnToken(context, true);
  if (redirectBasedOnTokenResult?.redirect) {
    return redirectBasedOnTokenResult;
  }

  // const redirectFirstUsersResult = redirectFirstUsers(context);
  // if (redirectFirstUsersResult?.redirect) {
  //   return redirectFirstUsersResult;
  // }

  return { props: {} };
};