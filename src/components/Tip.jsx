const Tip = ({ todos }) => {
  console.log(todos);
  
  const doneLengthTodos = todos.filter(todo => todo.status === 1) 
  const undoneLengthTodos = todos.filter(todo => todo.status === 0)

  
  return (
    <section className="flex flex-wrap items-center gap-20 justify-center  rounded-xl border border-white mt-10 p-10 center">
      <div className="flex gap-5 flex-col">
        <h1 className="text-4xl font-bold text-[#CCBCA4] font-[Share_Tech]">
          Todo Done
        </h1>
        <p className="text-white mt-6 font-[Share_Tech]">Keep it up</p>
      </div>
      <div className="bg-[#FF5730] text-[#190D11] border-none text-5xl font-bold w-[200px] h-[200px] rounded-full flex justify-center items-center">
        <span className="">{doneLengthTodos.length} / {undoneLengthTodos.length}</span>
      </div>
    </section>
  );
};

export default Tip;
