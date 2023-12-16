import Image from "next/image";
import m from "./Profile.module.scss";
import avatar from "@/assets/images/avatar/User.png";
import NavBar from "../UI/NavBar/NavBar";
import { useEffect, useRef, useState } from "react";
import SlicedReveal from "../UI/Reveal/SlicedReveal";
import PageRouter from "../UI/PageRouter/PageRouter";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Setting from "./Pages/Setting/Setting";
import History from "./Pages/History/History";
import Vault from "./Pages/Vault/Vault";
import { motion, useAnimation, useInView } from "framer-motion";

type TProps = {
  setCurrentPage: (value: string | null) => void;
};

const Profile = ({ setCurrentPage }: TProps) => {
  const [change, setChange] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animateControll = useAnimation();

  useEffect(() => {
    animateControll.start("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    // console.log(change);
    setCurrentPage(change);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change]);

  return (
    <section className={m.container}>
      <div className={m.wrapper}>
        <PageRouter title={"Profile"} subTitle={change} setChange={setChange} />

        <div className={m.content}>
          <div className={m.leftBar}>
            <SlicedReveal delay={0.5} duration={0.5}>
              <>
                <div className={m.userInfo}>
                  <div className={m.avatarWrapper}>
                    <Image className={m.avatar} src={avatar} alt="" />
                  </div>
                  <p className={m.userName}>FirstName, LastName</p>
                  <div className={m.balanceWrapper}>
                    <p className={m.balanceTitle}>Balance:</p>
                    <span className={m.balanceCount}>0$</span>
                  </div>
                </div>
                <NavBar setChange={setChange} change={change} />
              </>
            </SlicedReveal>
          </div>

          <div className={m.rightBar}>
            {change === "Setting" && <Setting />}
            {change === "History" && <History />}
            {change === "Vault" && <Vault />}
            {change === null && <UserInfo />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
