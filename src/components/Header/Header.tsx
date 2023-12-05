import Image from "next/image";
import m from "./Header.module.scss";
import Logo from "@/assets/icons/Logo.svg";
import Loupe from "@/assets/icons/Loupe.svg";
import Basket from "@/assets/icons/Basket.svg";
import User from "@/assets/images/avatar/User.png";
import { useRouter } from "next/router";

const Header = ({ setIsOpened }: any) => {
  const router = useRouter();
  
  return (
    <header className={m.container}>
      <div className={m.logoWrapper} onClick={() => router.push("/")}>
        <Image
          priority
          src={Logo}
          className={m.logoIcons}
          width={70}
          height={70}
          alt=""
        />
        <h1 className={m.logoTitle}>Void</h1>
      </div>
      <div className={m.buttonsWrapper}>
        {router.asPath === "/market" && (
          <button className={m.btn} onClick={() => setIsOpened(true)}>
            <Image src={Loupe} className={m.icons} alt="" />
            <p className={m.btnText}>Search</p>
          </button>
        )}

        <button className={m.btn} onClick={() => router.push("/market")}>
          <Image src={Basket} className={m.icons} alt="" />
          <p className={m.btnText}>Market</p>
        </button>
        <div className={m.avatarWrapper}>
          <Image
            priority
            onClick={() => router.push("/profile")}
            className={m.avatar}
            src={User}
            width={70}
            height={70}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
