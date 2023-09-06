import { getLayerValue } from "../../lib/hooks/valueOfOneLayer";
import { Dimensions } from "../inputPanel/InputPanel";
import Pallete from "../ui/Pallete";
import style from "./styles/workspace.module.css";

const Workspace = ({ productL, productS, paletteL, paletteS }: Dimensions) => {
  const { content } = getLayerValue(productL, productS, paletteL, paletteS);

  const paletteStyle = {
    width: `${paletteL / 50}rem`,
    height: `${paletteS / 50}rem`,
  };

  return (
    <section className={style.wrapper}>
      <Pallete paletteStyle={paletteStyle} content={content} />
    </section>
  );
};

export default Workspace;
