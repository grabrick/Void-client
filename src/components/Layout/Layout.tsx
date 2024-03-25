import React, { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import m from "./Layout.module.scss";
import { useRouter } from "next/router";
import Header from "../Header/Header";
import { useCurrentTheme } from "@/helpers/hooks/useOptions";

const Layout: FC<PropsWithChildren<any>> = ({
  children,
  setIsOpened,
  isOpened,
}) => {
  const router = useRouter();
  const { themeData } = useCurrentTheme()
  
  return (
    <section
      data-theme={themeData?.nameTheme}
      // data-theme="SunnyHills"
      className={m.container}
      style={{
        height: `${children}`
      }}
    >
      <div className={m.backImageWrapper}>
        <div className={router.asPath === "/about" ? m.changeBar : m.wrapper}>
          {router.asPath !== "/auth" && (
            <Header setIsOpened={setIsOpened} isOpened={isOpened} />
          )}
          <main className={m.main}>{children}</main>
        </div>
        {router.asPath !== "/auth" && <Footer />}
      </div>
    </section>
  );
};

export default Layout;
