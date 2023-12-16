import m from "./Clock.module.scss";
import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumber = (number: { toString: () => string }) => {
    return number.toString().padStart(2, "0");
  };

  const hours = formatNumber(currentTime.getHours());
  const minutes = formatNumber(currentTime.getMinutes());

  return (
    <div className={m.clock}>
      <h1 className={m.hours}>{hours}</h1>
      <div className={m.center}>
        <div className={m.square} />
        <div className={m.square} />
      </div>
      <h1 className={m.minutes}>{minutes}</h1>
    </div>
  );
};

export default Clock;
