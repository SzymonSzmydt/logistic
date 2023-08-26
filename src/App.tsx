import { useState } from "react";
import InputPanel from "./components/inputPanel/InputPanel";
import TablePanel from "./components/tablePanel/TablePanel";
import style from './styles/app.module.css'

const initialState = {
  productW: 0,
  productH: 0,
  palleteW: 0,
  palleteH: 0,
};

function App() {
  const [dimensions, setDimensions] = useState(initialState);
  return (
    <main className={style.main}>
      <InputPanel setDimensions={setDimensions} />
      <TablePanel {...dimensions}/>
    </main>
  );
}
export default App;
