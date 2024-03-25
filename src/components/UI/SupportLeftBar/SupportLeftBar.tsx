import { FC } from "react";
import Calendar from "./Calendar/Calendar";
import Clock from "./Clock/Clock";
import m from "./SupportLeftBar.module.scss";

type TProps = {
  setIsOpenedCalendar: (value: boolean) => void,
  nameTheme: string
}

const SupportLeftBar:FC<TProps> = ({ setIsOpenedCalendar, nameTheme }) => {

  return (
    <div className={m.container}>
      <Clock nameTheme={nameTheme} />
      <Calendar setIsOpenedCalendar={setIsOpenedCalendar} nameTheme={nameTheme} />
    </div>
  );  
};

export default SupportLeftBar;
