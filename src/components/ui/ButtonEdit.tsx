type ButtonEditProps = {
  editModeHandler: () => void;
};
export default function ButtonEdit({ editModeHandler }: ButtonEditProps) {
  return (
    <button className="material-icons" onClick={editModeHandler}>
      edit_square
    </button>
  );
}
