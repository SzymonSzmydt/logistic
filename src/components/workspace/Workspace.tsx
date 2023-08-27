import { getLayerValue } from "../../lib/hooks/valueOfOneLayer";
import { Dimensions } from "../inputPanel/InputPanel";
import style from "./styles/workspace.module.css";

const Workspace = ({ productL, productS, paletteL, paletteS }: Dimensions) => {
  const { variantA, variantB, value } = getLayerValue(
    productL,
    productS,
    paletteL,
    paletteS
  );

  const segmentsMin = Math.min(variantA, variantB);
  const segmentsMax = Math.max(variantA, variantB);
  const segments = Array.from(
    { length: segmentsMin },
    () => value - segmentsMax
  );

  const paletteStyle = {
    width: `${paletteL / 50}rem`,
    height: `${paletteS / 50}rem`,
  };

  const boxStyle =
    segmentsMax === variantA
      ? {
          maxWidth: `${paletteL / 50}rem`,
          maxHeight: `${paletteS / 50}rem`,
        }
      : {
          maxWidth: `${paletteS / 50}rem`,
          maxHeight: `${paletteL / 50}rem`,
        };

  console.log(segments);

  const productStyleL = {
    width: `${productL / 50}rem`,
    height: `${productS / 50}rem`,
  };
  const productStyleS = {
    width: `${productS / 50}rem`,
    height: `${productL / 50}rem`,
  };

  return (
    <section className={style.wrapper}>
      <div className={style.palette} style={paletteStyle}>
        {Array.isArray(segments)
          ? segments.map((segment, i) => (
              <div key={i} className={style.box} style={boxStyle}>
                {Array.from({ length: segment }, (_, i) => i).map((product) => (
                  <div
                    key={product}
                    style={productStyleS}
                    className={style.product}
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
