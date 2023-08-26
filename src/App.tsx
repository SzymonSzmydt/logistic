import { useState } from "react";
import InputPanel from "./components/inputPanel/InputPanel";

const initialState = {
  productW: 0,
  productH: 0,
  palleteW: 0,
  palleteH: 0,
};

function App() {
  const [dimensions, setDimensions] = useState(initialState);
  return (
    <>
      <InputPanel setDimensions={setDimensions} />
    </>
  );
}
export default App;
