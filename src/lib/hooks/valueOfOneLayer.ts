import { LayerType } from "../types/valueOfOneLayer";

const variant = (
  productL: number,
  productS: number,
  paletteL: number,
  paletteS: number
): LayerType => {
  const productStyleL = {
    width: `${productL / 50}rem`,
    height: `${productS / 50}rem`,
  };
  const productStyleS = {
    width: `${productS / 50}rem`,
    height: `${productL / 50}rem`,
  };

  const boxStyleL = {
    maxWidth: `${paletteL / 50}rem`,
    maxHeight: `${paletteS / 50}rem`,
  };

  const boxStyleS = {
    maxWidth: `${paletteS / 50}rem`,
    maxHeight: `${paletteL / 50}rem`,
  };

  if (productL > 0 && productS > 0 && paletteL > 0 && paletteS > 0) {
    const variant1a = paletteL / productL;
    const variant1b = paletteS / productS;
    return {
      total: variant1a * variant1b,
      content: [
        {
          quantity: Math.ceil(variant1a),
          boxStyle: boxStyleL,
          productStyle: productStyleS,
        },
        {
          quantity: Math.ceil(variant1b),
          boxStyle: boxStyleL,
          productStyle: productStyleS,
        },
      ],
    };
  }
  return {
    total: 0,
    content: [
      {
        quantity: 0,
        boxStyle: boxStyleL,
        productStyle: productStyleL,
      },
      {
        quantity: 0,
        boxStyle: boxStyleS,
        productStyle: productStyleS,
      },
    ],
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

  if (variantA.total > variantB.total) {
    return variantA;
  }
  return variantB;
};
