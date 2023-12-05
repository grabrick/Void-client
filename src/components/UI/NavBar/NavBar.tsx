import Cog from "@/assets/icons/Cog.svg";
import HistoryList from "@/assets/icons/History.svg";
import Coin from "@/assets/icons/Coin.svg";
import m from "./NavBar.module.scss";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";

type TProps = {
  change: string | null,
  setChange: (value: string) => void,
}

const NavBar:FC<TProps> = ({ change, setChange }) => {
  const router = useRouter()
  const changePage = (page: string) => {
    setChange(page)
    // router.push(`${router.asPath}/${page}`)
  }

  return (
    <div className={m.buttonWrapper}>
      <button className={m.navButton} onClick={() => changePage('Setting')}>
        <Image src={Cog} alt="" />
        <p>Setting</p>
      </button>
      <button className={m.navButton} onClick={() => changePage('History')}>
        <Image src={HistoryList} alt="" />
        <p>History</p>
      </button>
      <button className={m.navButton} onClick={() => changePage('Vault')}>
        <Image src={Coin} alt="" />
        <p>Vault</p>
      </button>
    </div>
  );
};

export default NavBar;
