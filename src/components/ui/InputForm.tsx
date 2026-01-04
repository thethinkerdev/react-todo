import type { ChangeEventHandler } from "react";

type InputFormProps = {
  title: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

export default function InputForm({ title, onChangeHandler }: InputFormProps) {
  return (
    <input
      autoFocus
      className="rounded-3xl grow text-[#767671] bg-[#1E1E1E] px-7 py-4"
      placeholder="Add a new task..."
      value={title}
      onChange={onChangeHandler}
    />
  );
}
