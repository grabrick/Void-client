import Image from "next/image";
import m from "./Header.module.scss";
import Logo from "@/assets/icons/Logo.svg";
import Loupe from "@/assets/icons/Loupe.svg";
import LoupeDark from "@/assets/icons/LoupeDark.svg";
import Basket from "@/assets/icons/Basket.svg";
import BasketDark from "@/assets/icons/BasketDark.svg";
import User from "@/assets/images/avatar/User.png";
import { useRouter } from "next/router";
import { useCurrentTheme } from "@/helpers/hooks/useOptions";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = ({ setIsOpened }: any) => {
  const router = useRouter();
  const { themeData } = useCurrentTheme();

  return (
    <motion.header data-theme={themeData?.nameTheme} className={m.container}>
      <Link className={m.logoWrapper} href={"/"} rel="preload">
        <Image
          priority
          src={Logo}
          className={m.logoIcons}
          width={70}
          height={70}
          alt=""
        />
        <h1 className={m.logoTitle}>Void</h1>
      </Link>
      <div className={m.buttonsWrapper}>
        {router.asPath === "/market" && (
          <button className={m.btn} onClick={() => setIsOpened(true)}>
            <Image
              src={themeData?.nameTheme !== "Default" ? Loupe : LoupeDark}
              priority
              className={m.icons}
              alt=""
            />
            <p className={m.btnText}>Search</p>
          </button>
        )}

        <Link rel="preload" className={m.btn} href={"/market"}>
          <Image
            src={themeData?.nameTheme !== "Default" ? Basket : BasketDark}
            priority
            className={m.icons}
            alt=""
          />
          <p className={m.btnText}>Market</p>
        </Link>
        <Link rel="preload" href={"/profile"} className={m.avatarWrapper}>
          <Image
            priority
            className={m.avatar}
            src={User}
            width={70}
            height={70}
            alt=""
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
