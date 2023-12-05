import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  slideColor: string
}

const Reveal = ({ children, width = "fit-content", slideColor }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateControll = useAnimation();
  const slideControll = useAnimation();

  useEffect(() => {
    animateControll.start("visible");
    slideControll.start("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animateControll}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeIn" }}
        animate={slideControll}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: slideColor,
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;
