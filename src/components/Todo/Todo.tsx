import { useState } from "react";
import PageRouter from "../UI/PageRouter/PageRouter";
import PressetErrorPopup from "../UI/Popup/PressetErrorPopup/PressetErrorPopup";
import SupportLeftBar from "../UI/SupportLeftBar/SupportLeftBar";
import m from "./Todo.module.scss";
import FullCalendar from "../UI/Popup/FullCalendar/FullCalendar";
import FolderTable from "./FolderTable/FolderTable";
import SlicedReveal from "../UI/Reveal/SlicedReveal";

const Todo = ({ validateData }: any) => {
  const pressetConfig = validateData.user.activePresset;
  const [isOpenedCalendar, setIsOpenedCalendar] = useState<boolean>(false);
  const data = {
    headers: ["#", "Folder Name", "Tags", "Date", "Closed"],
    rows: [
      {
        number: 1,
        folderName: "School education (118)",
        tags: ["education", "school"],
        date: "12.02.2023 02:20pm",
        closed: true,
        cells: [
          "1",
          "School education (118)",
          "education, school",
          "12.02.2023 02:20pm",
          "true",
        ],
      },
      {
        number: 2,
        folderName: "Work (123)",
        tags: ["job", "work"],
        date: "10.02.2023 08:30am",
        closed: false,
        cells: ["2", "Work (123)", "job, work", "10.02.2023 08:30am", "false"],
      },
    ],
  };

  return (
    <section className={m.container}>
      <div className={m.wrapper}>
        {pressetConfig.namePresset !== null && (
          <div className={m.todoWrapper}>
            <PageRouter title={"Home"} subTitle={null} />

            <div className={m.content}>
              <SlicedReveal duration={0.7} delay={0.5}>
                <SupportLeftBar setIsOpenedCalendar={setIsOpenedCalendar} />
              </SlicedReveal>
              <SlicedReveal duration={0.7} delay={0.5}>
                <FolderTable data={data} />
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
