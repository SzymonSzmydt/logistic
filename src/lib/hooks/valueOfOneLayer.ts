import { LayerType } from "../types/valueOfOneLayer";

const variant = (
  productL: number,
  productS: number,
  paletteL: number,
  paletteS: number
) => {
  if (productL > 0 && productS > 0 && paletteL > 0 && paletteS > 0) {
    const variant1a = Math.floor(paletteL / productL);
    const variant1b = Math.floor(paletteS / productS);
    return {
      variantA: variant1a,
      variantB: variant1b,
      value: variant1a * variant1b,
    };
  }
  return {
    variantA: 0,
    variantB: 0,
    value: 0,
  };
};

export const getLayerValue = (
  productL: number,
  productS: number,
  paletteL: number,
  paletteS: number
): LayerType => {
  const variantA = variant(productL, productS, paletteL, paletteS);
  const variantB = variant(productS, productL, paletteL, paletteS);

  if (variantA.value >= variantB.value) {
    return variantA;
  }
  return variantB;
};
