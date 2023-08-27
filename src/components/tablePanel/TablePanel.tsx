import { getLayerValue } from "../../lib/hooks/valueOfOneLayer";
import { Dimensions } from "../inputPanel/InputPanel";

const TablePanel = ({ productL, productS, paletteL, paletteS }: Dimensions) => {
  const valueOfOneLayer = getLayerValue(productL, productS, paletteL, paletteS);

  return (
    <table className='wrapper'>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Ilość</th>
          <th>J.m.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Opakowań na warstwie</th>
          <td> {valueOfOneLayer?.total} </td>
          <td> op. </td>
        </tr>
        <tr>
          <th> Opakowania ogółem </th>
          <td></td>
          <td> szt. </td>
        </tr>
        <tr>
          <th> Ilość warstw</th>
          <td></td>
          <td> szt. </td>
        </tr>
        <tr>
          <th>Waga warystwy</th>
          <td></td>
          <td> kg </td>
        </tr>
        <tr>
          <th>Waga całkowita</th>
          <td></td>
          <td> kg </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablePanel;
