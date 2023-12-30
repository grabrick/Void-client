import { GetServerSidePropsContext } from "next";
import { parseCookies, destroyCookie } from "nookies";

export function redirectFirstUsers(context: GetServerSidePropsContext) {
    const { user } = parseCookies(context);
    if (user) {
      try {
        let userData = JSON.parse(user);
        if (userData && userData.role === "initialUser") {
          return {
            redirect: {
              destination: "/about",
              permanent: false,
            },
          };
        }
      } catch (e) {
        destroyCookie(context, 'user');
        destroyCookie(context, 'refreshToken');

        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }
    }
  return { props: {
    user: user
  } };
}
