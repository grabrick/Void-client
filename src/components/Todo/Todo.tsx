import m from "./Todo.module.scss";

const Todo = ({ validateData }: any) => {
  console.log(validateData);
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <h1>Todo</h1>
      </div>
    </div>
  );
};

export default Todo;
