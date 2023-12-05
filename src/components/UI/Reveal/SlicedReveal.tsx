import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  duration: number;
  delay: number;
}

const SlicedReveal = ({ children, width, duration, delay }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateControll = useAnimation();

  useEffect(() => {
    animateControll.start("visible");
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
        transition={{ duration: duration, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlicedReveal;
