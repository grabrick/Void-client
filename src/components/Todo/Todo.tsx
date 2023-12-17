import { useState } from "react";
import PageRouter from "../UI/PageRouter/PageRouter";
import PressetErrorPopup from "../UI/Popup/PressetErrorPopup/PressetErrorPopup";
import SupportLeftBar from "../UI/SupportLeftBar/SupportLeftBar";
import m from "./Todo.module.scss";
import FullCalendar from "../UI/Popup/FullCalendar/FullCalendar";
import Image from "next/image";
import Create from "@/assets/icons/Create.svg";
import Edit from "@/assets/icons/EditPenW.svg";
import TrashCan from "@/assets/icons/TrashCan.svg";

const Todo = ({ validateData }: any) => {
  const pressetConfig = validateData.user.activePresset;
  const [isOpenedCalendar, setIsOpenedCalendar] = useState<boolean>(false);
  const data = {
    headers: ["Number", "Folder Name", "Tags", "Date", "Closed"],
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
              <SupportLeftBar setIsOpenedCalendar={setIsOpenedCalendar} />
              <div className={m.windowTodo}>
                <div className={m.todoHeader}>
                  <button className={m.button}>
                    <Image className={m.img} src={Create} alt="" />
                    {"Create"}
                  </button>
                  <button className={m.button}>
                    <Image className={m.img} src={Edit} alt="" />
                    {"Edit"}
                  </button>
                  <button className={m.button}>
                    <Image className={m.img} src={TrashCan} alt="" />
                    {"Delete"}
                  </button>
                </div>
                <table className={m.table}>
                  <thead>
                    <tr>
                      {data.headers.map((header, index) => (
                        <th
                          key={index}
                          className={m.headerTitle}
                          style={{
                            width:
                              index === 1 ? "500px" : "100px",
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((row, index) => (
                      <tr key={index} className={m.section}>
                        {row.cells.map((cell, index) => (
                          <td
                            key={index}
                            className={m.rowTitle}
                          >
                            {cell}
                            {index === 0 || index === 1 ? "" : <br />}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
