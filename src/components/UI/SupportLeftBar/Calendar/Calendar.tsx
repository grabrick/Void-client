import Image from "next/image";
import m from "./Calendar.module.scss";
import Left from "@/assets/icons/ArrowCalendarLeftWhite.svg";
import Right from "@/assets/icons/ArrowCalendarRightWhite.svg";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import { FC, useState } from "react";

type TProps = {
  setIsOpenedCalendar: (value: boolean) => void;
  nameTheme: string;
};

const Calendar: FC<TProps> = ({ setIsOpenedCalendar, nameTheme }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonthStart = startOfMonth(currentDate);
  const currentMonthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({
    start: currentMonthStart,
    end: currentMonthEnd,
  });
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startDayIndex = firstDayOfMonth.getDay();

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className={m.calendar} data-theme={nameTheme}>
      <div className={m.header}>
        <button className={m.arrowBtn}>
          <Image
            className={m.img}
            src={Left}
            onClick={() => prevMonth()}
            alt=""
          />
        </button>

        {/* <h1 className={m.dateName} onClick={() => setIsOpenedCalendar(true)}>
          {format(currentDate, "MMMM")}
        </h1> */}
        <h1 className={m.dateName}>
          {format(currentDate, "MMMM")}
        </h1>
        <button className={m.arrowBtn}>
          <Image
            className={m.img}
            src={Right}
            onClick={() => nextMonth()}
            alt=""
          />
        </button>
      </div>
      <div className={m.daysHeader}>
        {daysOfWeek.map((day, index) => (
          <h4 key={index} className={m.day}>
            {day}
          </h4>
        ))}
      </div>
      <div className={m.days}>
        {Array.from(
          { length: startDayIndex === 0 ? 6 : startDayIndex - 1 },
          (_, index) => (
            <div key={`empty-${index}`} className={`${m.day} ${m.emptyDay}`} />
          )
        )}
        {daysInMonth.map((day, index) => {
          return (
            <div key={index} className={m.dayWrapper}>
              <h4
                className={`${m.dayNumber} ${
                  day.getMonth() === currentDate.getMonth() ? "" : m.otherMonth
                } ${
                  day.getDate() === new Date().getDate() &&
                  day.getMonth() === new Date().getMonth()
                    ? m.today
                    : ""
                }`}
                onClick={() =>
                  console.log(`Clicked on ${format(day, "MMMM d, yyyy")}`)
                }
              >
                {format(day, "d")}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
