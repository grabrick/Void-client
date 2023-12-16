import { useState } from "react";
import PageRouter from "../UI/PageRouter/PageRouter";
import PressetErrorPopup from "../UI/Popup/PressetErrorPopup/PressetErrorPopup";
import SupportLeftBar from "../UI/SupportLeftBar/SupportLeftBar";
import m from "./Todo.module.scss";
import FullCalendar from "../UI/Popup/FullCalendar/FullCalendar";

const Todo = ({ validateData }: any) => {
  const pressetConfig = validateData.user.activePresset;
  const [isOpenedCalendar, setIsOpenedCalendar] = useState<boolean>(false)
    
  return (
    <section className={m.container}>
      <div className={m.wrapper}>
        {pressetConfig.namePresset !== null && (
          <div className={m.todoWrapper}>
            <PageRouter title={"Home"} subTitle={null} />

            <div className={m.content}>
              <div className={m.LeftBar}>
                <SupportLeftBar setIsOpenedCalendar={setIsOpenedCalendar} />
              </div>
            </div>
          </div>
        )}
      </div>
      {pressetConfig.namePresset === null && <PressetErrorPopup />}
      {isOpenedCalendar === true && <FullCalendar isOpenedCalendar={isOpenedCalendar} setIsOpenedCalendar={setIsOpenedCalendar} />}

    </section>
  );
};

export default Todo;
