import { FC } from "react";
import m from "./PageRouter.module.scss";
import ArrowR from "@/assets/icons/Arrowright.svg";
import Reveal from "../Reveal/Reveal";
import Image from "next/image";
import { useRouter } from "next/router";

type TProps = {
  title: string;
  subTitle: string | null;
  setChange?: (value: string | null) => void;
};

const PageRouter: FC<TProps> = ({ title, subTitle, setChange }) => {
  const router = useRouter();
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
        <Reveal slideColor="#252525">
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
        </Reveal>
      ) : (
        <div className={m.routeWrapper}>
          <h1
            className={m.routeTitle}
            style={{ cursor: "pointer" }}
            onClick={() => changer(title)}
          >
            {title}
          </h1>
          <Image src={ArrowR} width={31} height={31} alt="" />
          <Reveal slideColor="#252525">
            <h1 className={m.routeTitle}>{subTitle}</h1>
          </Reveal>
        </div>
      )}
    </div>
  );
};

export default PageRouter;
