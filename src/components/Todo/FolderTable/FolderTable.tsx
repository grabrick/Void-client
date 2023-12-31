import { FC } from "react";
import m from "./FolderTable.module.scss";
import Image from "next/image";
import Create from "@/assets/icons/CreateBlack.svg";
import Edit from "@/assets/icons/EditPenBlack.svg";
import TrashCan from "@/assets/icons/TrashCanBlack.svg";

type TRows = {
  number: number;
  folderName: string;
  tags: string[];
  date: string;
  closed: boolean;
  cells: string[];
};

interface TProps {
  data: {
    headers: string[];
    rows: TRows[];
  }
}

const FolderTable: FC<TProps> = ({ data }) => {
  return (
    <div className={m.windowTodo}>
      <div className={m.todoHeader}>
        <div className={m.left}>
          <div className={m.search}>
            <Image src={""} alt="" />
          </div>
        </div>
        <div className={m.right}>
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
      </div>
      <table className={m.table}>
        <thead>
          <tr>
            {data.headers.map((header: any, index: any) => (
              <th key={index} className={m.headerTitle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row: any, index: any) => (
            <tr key={index} className={m.section}>
              {row.cells.map((cell: any, index: any) => (
                <td key={index} className={m.rowTitle}>
                  {cell}
                  {index === 0 || index === 1 ? "" : <br />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FolderTable;
