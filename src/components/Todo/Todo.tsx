import { useState } from "react";
import PageRouter from "../UI/PageRouter/PageRouter";
import PressetErrorPopup from "../UI/Popup/PressetErrorPopup/PressetErrorPopup";
import SupportLeftBar from "../UI/SupportLeftBar/SupportLeftBar";
import m from "./Todo.module.scss";
import FullCalendar from "../UI/Popup/FullCalendar/FullCalendar";
import FolderTable from "./FolderTable/FolderTable";
import SlicedReveal from "../UI/Reveal/SlicedReveal";
import { useCurrentTheme } from "@/helpers/hooks/useOptions";
import { motion } from "framer-motion";

const Todo = ({ validateData }: any) => {
  const pressetConfig = validateData.user.activePresset;
  const [isOpenedCalendar, setIsOpenedCalendar] = useState<boolean>(false);
  const { themeData } = useCurrentTheme();

  return (
    <section className={m.container}>
      <div className={m.wrapper}>
        {pressetConfig.namePresset !== null && (
          <div className={m.todoWrapper}>
            <PageRouter title={"Home"} subTitle={null} />

            <div className={m.content}>
              <SlicedReveal duration={0.7} delay={0.5}>
                <SupportLeftBar setIsOpenedCalendar={setIsOpenedCalendar} nameTheme={themeData?.nameTheme} />
              </SlicedReveal>
              <SlicedReveal duration={0.7} delay={0.5} width="100%">
                <FolderTable nameTheme={themeData?.nameTheme} />
              </SlicedReveal>
            </div>
          </div>
        )}
      </div>
      {pressetConfig.namePresset === null && <PressetErrorPopup />}
      {isOpenedCalendar === true && (
        <FullCalendar
          isOpenedCalendar={isOpenedCalendar}
          setIsOpenedCalendar={setIsOpenedCalendar}
        />
      )}
    </section>
  );
};

export default Todo;
