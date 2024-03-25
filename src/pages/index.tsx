import Layout from "@/components/Layout/Layout";
import { redirectBasedOnToken } from "@/helpers/auth-redirect";
import Head from 'next/head'
import { GetServerSideProps } from "next";
import { redirectFirstUsers } from "@/helpers/user-redirect";
import { UserService } from "@/services/user/user.services";
import dynamic from "next/dynamic";

const DynamicTodo = dynamic(
  () => import("@/components/Todo/Todo"),
  {
    ssr: false,
  }
)

export default function Home({findUser}: any) {
  return (
    <>
      <Head>
        <title>Void</title>
      </Head>
      <Layout>
        <DynamicTodo validateData={findUser} />
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

  const userData = redirectFirstUsersResult.props.user;
  const findUser = await UserService.getUser(userData);

  return { props: {
    findUser: findUser || null
  } };
};