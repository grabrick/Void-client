import Layout from "@/components/Layout/Layout";
import { redirectBasedOnToken } from "@/helpers/auth-redirect";
import Head from 'next/head'
import { GetServerSideProps } from "next";
import { redirectFirstUsers } from "@/helpers/user-redirect";
import Market from "@/components/Market/Market";
import { PresetService } from "@/services/preset/preset.services";
import { useState } from "react";
// import { useRouter } from "next/router";

export default function MarketPage({marketValue}: any) {
  // const router = useRouter()
  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <>
      <Head>
        <title>Market</title>
      </Head>
      <Layout setIsOpened={setIsOpened}>
        <Market marketValue={marketValue} isOpened={isOpened} setIsOpened={setIsOpened} />
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
  
  const marketValue = await PresetService.getCards()

  return { 
    props: {
      marketValue: marketValue
    } 
  };
};