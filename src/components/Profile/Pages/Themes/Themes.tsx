import m from "./Themes.module.scss";
import EditPen from "@/assets/icons/EditPenW.svg";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useCurrentTheme } from "@/helpers/hooks/useOptions";

const Themes = ({ themeName }: {themeName: string}) => {
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
      {/* <div className={m.content}> */}
      <h1 className={m.title}>Coming soon...</h1>
      {/* </div> */}
    </motion.div>
  );
};

export default Themes;
