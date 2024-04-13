import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TaschenRechner from "./Components/TaschenRechner";

function App() {
  const [count, setCount] = useState(0);

  return <TaschenRechner />;
}

export default App;
