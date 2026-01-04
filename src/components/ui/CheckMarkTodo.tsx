import useTodos from "../../hooks/useTodos";

export default function CheckMarkTodo({
  todoID,
  status,
}: {
  todoID: string;
  status: boolean;
}) {
  const { toggleTodoHandler } = useTodos();

  return (
    <div>
      {status ? (
        <span
          onClick={() => {
            toggleTodoHandler(todoID);
          }}
          className="w-7 h-7 border-2 rounded-full select-none block my-border-orange cursor-pointer material-icons text-white"
        >
          check
        </span>
      ) : (
        <span
          onClick={() => {
            toggleTodoHandler(todoID);
          }}
          className="w-7 h-7 border-2 rounded-full block my-border-orange select-none cursor-pointer"
        ></span>
      )}
    </div>
  );
}
