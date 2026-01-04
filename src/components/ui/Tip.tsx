import { useSelector } from "react-redux";
import type { TodoType } from "../../types";
import type { RootState } from "../../store";

const Tip = () => {
  const todosList = useSelector((state: RootState) => state.todo.list);

  const doneLengthTodos = todosList.filter(
    (todo: TodoType) => todo.status === true
  );
  const undoneLengthTodos = todosList.filter(
    (todo: TodoType) => todo.status === false
  );

  return (
    <section className="flex flex-wrap items-center gap-20 justify-center  rounded-xl border border-white mt-10 p-10 center">
      <div className="flex gap-5 flex-col">
        <h1 className="text-4xl font-bold text-[#CCBCA4] font-[Share_Tech]">
          Todo Done
        </h1>
        <p className="text-white mt-6 font-[Share_Tech]">Keep it up</p>
      </div>
      <div className="bg-[#FF5730] text-[#190D11] border-none text-5xl font-bold w-[200px] h-[200px] rounded-full flex justify-center items-center">
        <span className="">
          {doneLengthTodos.length} / {undoneLengthTodos.length}{" "}
          <sub className="text-2xl">{todosList.length}</sub>
        </span>
      </div>
    </section>
  );
};

export default Tip;
