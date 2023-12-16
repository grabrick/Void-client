import m from "./SmallCalendar.module.scss";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import { FC } from "react";

const SmallCalendar: FC<any> = ({ currentDate }) => {
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

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className={m.calendar}>
      <div className={m.header}>
        <h1 className={m.dateName} onClick={() => ''}>
          {format(currentDate, "MMMM")}
        </h1>
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

export default SmallCalendar;