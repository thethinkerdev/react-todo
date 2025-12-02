import { useState } from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  let [userSequence, setUserSequence] = useState(0);
  const addUserSequenceHandler = () => setUserSequence(prev => prev + 1)

  return <TodoContainer userSequence={userSequence} addUserSequenceHandler={addUserSequenceHandler} />;
};
export default App;
