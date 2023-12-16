import { FC } from "react";
import Calendar from "./Calendar/Calendar";
import Clock from "./Clock/Clock";
import m from "./SupportLeftBar.module.scss";

type TProps = {
  setIsOpenedCalendar: (value: boolean) => void
}

const SupportLeftBar:FC<TProps> = ({ setIsOpenedCalendar }) => {
  return (
    <div className={m.container}>
      <Clock />
      <Calendar setIsOpenedCalendar={setIsOpenedCalendar} />
    </div>
  );  
};

export default SupportLeftBar;
