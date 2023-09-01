import { getLayerValue } from "../../lib/hooks/valueOfOneLayer";
import { Dimensions } from "../inputPanel/InputPanel";
import style from "./styles/workspace.module.css";

const Workspace = ({ productL, productS, paletteL, paletteS }: Dimensions) => {
  const { content } = getLayerValue(productL, productS, paletteL, paletteS);

  const paletteStyle = {
    width: `${paletteL / 50}rem`,
    height: `${paletteS / 50}rem`,
  };

  return (
    <section className={style.wrapper}>
      <div className={style.palette} style={paletteStyle}>
        {Array.isArray(content)
          ? content.map((sector, i) => (
              <div key={i} className={style.box}>
                {sector.quantity.map((key) => (
                  <div
                    key={key}
                    className={style.product}
                    style={sector.productStyle}
                  />
                ))}
              </div>
            ))
          : false}
      </div>
    </section>
  );
};

export default Workspace;
