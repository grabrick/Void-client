import { FC, useState } from "react";
import m from "./FullCalendar.module.scss";
import SmallCalendar from "./SmallCalendar/SmallCalendar";
import Left from "@/assets/icons/ArrowCalendarLeft.svg";
import Right from "@/assets/icons/ArrowCalendarRight.svg";
import Image from "next/image";

type TProps = {
  setIsOpenedCalendar: (value: boolean) => void;
  isOpenedCalendar: boolean;
};

const FullCalendar: FC<TProps> = ({ setIsOpenedCalendar }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [activeDate, setActiveDate] = useState<Date | null>(null);

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1)
    setActiveDate(null)
  };
  const handleNextYear = () => {
    setCurrentYear(currentYear + 1)
    setActiveDate(null)
  };

  return (
    <div className={m.container} onClick={() => setIsOpenedCalendar(false)}>
      <div className={m.wrapper}>
        <div className={m.modal} onClick={(e) => e.stopPropagation()}>
          <div className={m.navigateBar}>
            <div className={m.navigateBarWrapper}>
              <Image
                className={m.img}
                src={Left}
                onClick={() => handlePrevYear()}
                alt=""
              />
              <h1 className={m.year}>{currentYear}</h1>
              <Image
                className={m.img}
                src={Right}
                onClick={() => handleNextYear()}
                alt=""
              />
            </div>
          </div>
          <div className={m.content}>
            {Array.from({ length: 12 }, (_, index) => {
              const monthDate = new Date(currentYear, index, 1);
              return <SmallCalendar key={index} currentDate={monthDate} activeDate={activeDate} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCalendar;
