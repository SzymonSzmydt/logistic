import { useState } from "react";
import InputPanel from "./components/inputPanel/InputPanel";
import TablePanel from "./components/tablePanel/TablePanel";
import Workspace from "./components/workspace/Workspace";
import style from "./styles/app.module.css";

const initialState = {
  productL: 400,
  productS: 300,
  paletteL: 1200,
  paletteS: 800,
};

function App() {
  const [dimensions, setDimensions] = useState(initialState);
  return (
    <main className={style.main}>
      <InputPanel setDimensions={setDimensions} />
      <TablePanel {...dimensions} />
      <Workspace {...dimensions} />
    </main>
  );
}
export default App;
