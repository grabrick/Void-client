import { url } from "inspector";
import m from "./Auth.module.scss";
import { motion } from "framer-motion";
import BKImage1 from "../../assets/images/Bk2.png";
import BKImage2 from "../../assets/images/Bk3.png";
import BKImage3 from "../../assets/images/Bk4.png";
import LoginPopup from "../UI/Popup/LoginPopup/LoginPopup";
import { useEffect, useState } from "react";
import RegisterPopup from "../UI/Popup/RegisterPopup/RegisterPopup";

const Auth = () => {
  const [change, setChange] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const images = [BKImage1, BKImage2, BKImage3];

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImageIndex(nextImageIndex);
    }, 10000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className={m.container}>
      <motion.div
        style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInOut}
      />
      <motion.div
        className={m.container}
        style={{ backgroundImage: `url(${images[nextImageIndex].src})` }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInOut}
      />

      {change === false ? (
        <LoginPopup setChange={setChange} />
      ) : (
        <RegisterPopup setChange={setChange} />
      )}
    </div>
  );
};


export default Auth;
