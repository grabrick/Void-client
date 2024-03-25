import { FC, useState } from "react";
import m from "./FolderTable.module.scss";
import Image from "next/image";
import CreateDark from "@/assets/icons/CreateBlack.svg";
import EditDark from "@/assets/icons/EditPenBlack.svg";
import TrashCanDark from "@/assets/icons/TrashCanBlack.svg";
import Create from "@/assets/icons/Create.svg";
import Edit from "@/assets/icons/EditPenW.svg";
import TrashCan from "@/assets/icons/TrashCan.svg";

import LockClosedWhite from "@/assets/icons/LockClosedWhite.svg";
import LockOpenedWhite from "@/assets/icons/LockOpenedWhite.svg";
import LockClosedDark from "@/assets/icons/LockClosedDark.svg";
import LockOpenedDark from "@/assets/icons/LockOpenedDark.svg";
import CreateFolderPopup from "@/components/UI/Popup/TodoPopup/CreateFolderPopup/CreateFolderPopup";

type TActions = {
  type: string | null;
  flag: boolean;
};

// interface TProps {
//   data: {
//     headers: string[];
//     rows: TRows[];
//   }
// }

const FolderTable = ({ nameTheme }: { nameTheme: string }) => {
  const [isButtonActions, setIsButtonActions] = useState<TActions>({
    type: null,
    flag: false,
  });
  const [isCurrentIcons, setIsCurrentIcons] = useState(false);
  console.log(isCurrentIcons);

  return (
    <div className={m.windowTodo} data-theme={nameTheme}>
      <div className={m.todoHeader}>
        <div className={m.left}>
          <div className={m.search}>
            <Image src={""} alt="" />
          </div>
        </div>
        <div className={m.right}>
          <button
            className={m.button}
            onClick={() => setIsButtonActions({ type: "create", flag: true })}
          >
            <Image
              className={m.img}
              src={nameTheme === "Default" ? CreateDark : Create}
              alt=""
            />
            {"Create"}
          </button>
          <button
            className={m.button}
            onClick={() => setIsButtonActions({ type: "edit", flag: true })}
          >
            <Image
              className={m.img}
              src={nameTheme === "Default" ? EditDark : Edit}
              alt=""
            />
            {"Edit"}
          </button>
          <button
            className={m.button}
            onClick={() => setIsButtonActions({ type: "delete", flag: true })}
          >
            <Image
              className={m.img}
              src={nameTheme === "Default" ? TrashCanDark : TrashCan}
              alt=""
            />
            {"Delete"}
          </button>
        </div>
      </div>
      <div className={m.folderContainer}>
        <div className={m.folder}>
          <div className={m.nameWrapper}>
            <h1 className={m.number}>1</h1>
            <div className={m.middleLine} />
            <h2 className={m.name}>FolderName1</h2>
          </div>
          <div className={m.miscWrapper}>
            <div className={m.tags}>
              <h4 className={m.tag}>Education, School</h4>
              <h4 className={m.date}>12.02.2023</h4>
            </div>
            <div
              className={m.lock}
              onClick={() => setIsCurrentIcons(!isCurrentIcons)}
            >
              {nameTheme !== "Default" && (
                <Image
                  src={
                    isCurrentIcons === true && nameTheme !== "Default"
                      ? LockClosedWhite
                      : LockOpenedWhite
                  }
                  alt=""
                />
              )}
              {nameTheme === "Default" && (
                <Image
                  src={
                    isCurrentIcons === true && nameTheme === "Default"
                      ? LockClosedDark
                      : LockOpenedDark
                  }
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isButtonActions.type === "create" && isButtonActions.flag === true && (
        <CreateFolderPopup
          setIsButtonActions={setIsButtonActions}
          isButtonActions={isButtonActions.flag}
        />
      )}
    </div>
  );
};

export default FolderTable;
