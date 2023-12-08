import PressetErrorPopup from "../UI/Popup/PressetErrorPopup/PressetErrorPopup";
import m from "./Todo.module.scss";

const Todo = ({ validateData }: any) => {
  const pressetConfig = validateData.user.activePresset;
    
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        {pressetConfig.namePresset !== null && <h1>Todo</h1>}
      </div>
      {pressetConfig.namePresset === null && <PressetErrorPopup />}
    </div>
  );
};

export default Todo;
