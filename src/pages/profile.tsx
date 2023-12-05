import Layout from "@/components/Layout/Layout";
import Profile from "@/components/Profile/Profile";
import { GetServerSideProps } from "next";
import { redirectBasedOnToken } from "@/helpers/auth-redirect";
import Head from "next/head";
import { redirectFirstUsers } from "@/helpers/user-redirect";
import { useState } from "react";

export default function ProfilePage() {
  const [currentPage, setCurrentPage] = useState<string | null>(null)
  return (
    <>
      <Head>
        <title>{currentPage !== null ? currentPage : 'Profile'}</title>
      </Head>
      <Layout>
        <Profile setCurrentPage={setCurrentPage} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const redirectBasedOnTokenResult = redirectBasedOnToken(context, false);
  if (redirectBasedOnTokenResult?.redirect) {
    return redirectBasedOnTokenResult;
  }

  const redirectFirstUsersResult = redirectFirstUsers(context);
  if (redirectFirstUsersResult?.redirect) {
    return redirectFirstUsersResult;
  } 

  return { props: {} };
};