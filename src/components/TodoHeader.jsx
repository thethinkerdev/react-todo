const TodoHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-7xl font-bold font-[Share_Tech]">
        <span className="text-white">Todo</span>
        <span className="text-orange-400">UP</span>
      </h1>
      <span className="text-white scale-200 material-symbols-outlined">
exit_to_app
</span>
    </header>
  );
};

export default TodoHeader;
