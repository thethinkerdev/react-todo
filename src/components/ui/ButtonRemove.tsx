import useTodos from "../../hooks/useTodos";

export default function ButtonRemove({ todoID }: { todoID: string }) {
  const { deleteTodoHandler } = useTodos();
  return (
    <button
      className="material-icons-outlined cursor-pointer"
      onClick={() => deleteTodoHandler(todoID)}
    >
      delete
    </button>
  );
}
