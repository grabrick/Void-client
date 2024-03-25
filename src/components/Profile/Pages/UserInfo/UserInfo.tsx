import Reveal from "@/components/UI/Reveal/Reveal";
import m from "./UserInfo.module.scss";
import EditPen from "@/assets/icons/EditPenW.svg";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const UserInfo = ({ themeName }: {themeName: string}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateControll = useAnimation();

  useEffect(() => {
    animateControll.start("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <motion.div
      data-theme={themeName}
      className={m.container}
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animateControll}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className={m.funcBar}>
        <button className={m.editBtn}>
          <Image
            className={m.editIcons}
            width={24}
            height={24}
            src={EditPen}
            alt=""
          />
          <p className={m.editText}>Edit</p>
        </button>
      </div>
      <div className={m.content}>
        <div className={m.nameContainer}>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>First Name</span>
            </Reveal>
            <p className={m.name}>Arut</p>
          </div>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>Last Name</span>
            </Reveal>
            <p className={m.name}>Erborjalib</p>
          </div>
        </div>

        <div className={m.personalContainer}>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>Gender</span>
            </Reveal>
            <p className={m.name}>Male</p>
          </div>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>Location</span>
            </Reveal>
            <p className={m.name}>New York</p>
          </div>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>Mac address</span>
            </Reveal>
            <p className={m.name}>128.0.0.282:5505</p>
          </div>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>Phone</span>
            </Reveal>
            <p className={m.name}>{`+7(723)555-55-55`}</p>
          </div>
          <div className={m.nameWrapper}>
            <Reveal slideColor={"#252525"}>
              <span className={m.shadowTitle}>Age</span>
            </Reveal>
            <p className={m.name}>27</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserInfo;
