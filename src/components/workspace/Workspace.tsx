import { sideArea } from "../../lib/hooks/valueOfOneLayer";
import { Dimensions } from "../inputPanel/InputPanel";
import style from "./styles/workspace.module.css";

const Workspace = ({ productL, productS, paletteL, paletteS }: Dimensions) => {
  sideArea(productL, productS, paletteL, paletteS);

  const paletteStyle = {
    width: `${paletteL / 50}rem`,
    height: `${paletteS / 50}rem`,
  };

  return (
    <section className={style.wrapper}>
      {/* <Pallete paletteStyle={paletteStyle} /> */}
    </section>
  );
};

export default Workspace;
