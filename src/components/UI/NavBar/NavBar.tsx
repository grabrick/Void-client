import Cog from "@/assets/icons/Cog.svg";
import HistoryList from "@/assets/icons/History.svg";
import Coin from "@/assets/icons/Coin.svg";
import m from "./NavBar.module.scss";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import SlicedReveal from "../Reveal/SlicedReveal";
import { motion, useAnimation, useInView } from "framer-motion";

type TProps = {
  change: string | null;
  setChange: (value: string) => void;
};

const NavBar: FC<TProps> = ({ change, setChange }) => {
  const router = useRouter();
  const animateControll = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const changePage = (page: string) => {
    setChange(page);
    // router.push(`${router.asPath}/${page}`)
  };

  useEffect(() => {
    animateControll.start("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref} style={{ position: "relative", overflow: "hidden" }}
      className={m.buttonWrapper}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animateControll}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <button className={m.navButton} onClick={() => changePage("Setting")}>
        <Image src={Cog} alt="" />
        <p>Setting</p>
      </button>
      <button className={m.navButton} onClick={() => changePage("History")}>
        <Image src={HistoryList} alt="" />
        <p>History</p>
      </button>
      <button className={m.navButton} onClick={() => changePage("Vault")}>
        <Image src={Coin} alt="" />
        <p>Vault</p>
      </button>
    </motion.div>
  );
};

export default NavBar;
