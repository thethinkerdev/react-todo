type ButtonAddTypeProps = {
  showAddTodo?: boolean;
};
export default function ButtonAdd({ showAddTodo = false }: ButtonAddTypeProps) {
  return (
    <button
    type="submit"
      disabled={!showAddTodo}
      className={`${
        showAddTodo ? "opacity-100" : "opacity-50"
      } my-bg-orange cursor-pointer  grow-0 rounded-full p-2 flex justify-center items-center`}
    >
      <span className="material-icons scale-90">add</span>
    </button>
  );
}
