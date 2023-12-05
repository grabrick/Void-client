import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

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
        console.error('Ошибка при разборе JSON из cookie', e);
      }
    }
  return { props: {
    user: user
  } };
}
