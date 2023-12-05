import React, { FC, PropsWithChildren, useEffect } from "react";
import Footer from "../Footer/Footer";
import m from "./Layout.module.scss";
import { useRouter } from "next/router";
import Header from "../Header/Header";


const Layout: FC<PropsWithChildren<any>> = ({ children, setIsOpened, isOpened }) => {
  const router = useRouter();
  return (
    <div className={m.container} style={{ height: `${children}` }}>
      <div className={router.asPath === '/about' ? m.changeBar : m.wrapper}>
        {router.asPath !== "/auth" && <Header setIsOpened={setIsOpened} isOpened={isOpened} />}
        <main className={m.main}>{children}</main>
      </div>
      {router.asPath !== "/auth" && <Footer />}
    </div>
  );
};

export default Layout;
