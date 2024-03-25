import { FC } from "react";
import m from "./PageRouter.module.scss";
import ArrowR from "@/assets/icons/ArrowrightWhite.svg";
import Reveal from "../Reveal/Reveal";
import Image from "next/image";
import { useRouter } from "next/router";
import SlicedReveal from "../Reveal/SlicedReveal";
import { useCurrentTheme } from "@/helpers/hooks/useOptions";

type TProps = {
  title: string;
  subTitle: string | null;
  setChange?: (value: string | null) => void;
};

const PageRouter: FC<TProps> = ({ title, subTitle, setChange }) => {
  const router = useRouter();
  const { themeData } = useCurrentTheme();
  const changer = (route: string) => {
    // if (router.asPath !== `/${title.toLocaleLowerCase()}`) {
    //   router.push(route.toLocaleLowerCase());
    // } else if (subTitle) {
    //   setChange(null);
    // }
    if (subTitle && setChange) {
      setChange(null);
    }
  };

  return (
    <div className={m.container}>
      {subTitle === null ? (
        <SlicedReveal duration={0.5} delay={0.25}>
          <div className={m.subWrapper} data-theme={themeData?.nameTheme}>
            <h1
              className={m.routeTitle}
              style={
                router.asPath !== `/${title.toLocaleLowerCase()}`
                  ? { cursor: "pointer" }
                  : {}
              }
              onClick={() => changer(title)}
            >
              {title}
            </h1>
          </div>
        </SlicedReveal>
      ) : (
        <div className={m.routeWrapper}>
          <div className={m.subWrapper} data-theme={themeData?.nameTheme}>
            <h1
              className={m.routeTitle}
              style={{ cursor: "pointer" }}
              onClick={() => changer(title)}
            >
              {title}
            </h1>
          </div>

          <div className={m.subWrapper} data-theme={themeData?.nameTheme}>
            <Image src={ArrowR} className={m.img} alt="" />
          </div>

          <SlicedReveal duration={0.5} delay={0.25}>
            <div className={m.subWrapper} data-theme={themeData?.nameTheme}>
              <h1 className={m.routeTitle}>{subTitle}</h1>
            </div>
          </SlicedReveal>
        </div>
      )}
    </div>
  );
};

export default PageRouter;
