import { Content } from "../../lib/types/workspace";
import style from "./style/style.module.css";

interface palette {
  width: string;
  height: string;
}

interface PaletteProps {
  paletteStyle: palette;
  content: Content[];
}

const Pallete = ({ paletteStyle, content }: PaletteProps) => {
  return (
    <section className={style.palette} style={paletteStyle}>
      {Array.isArray(content)
        ? content.map((sector, i) => (
            <div key={i}>
              {Array.from({ length: sector.quantity }, (_, i) => i).map(
                (key) => (
                  <div key={key} className={style.product} style={sector.box} />
                )
              )}
            </div>
          ))
        : false}
    </section>
  );
};

export default Pallete;
