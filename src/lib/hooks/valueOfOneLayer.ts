import { LayerType } from "../types/workspace";

const variant = (
  productL: number,
  productS: number,
  paletteL: number,
  paletteS: number
): LayerType => {
  const productStyleL = {
    width: `${productS / 50}rem`,
    height: `${productL / 50}rem`,
  };
  const productStyleS = {
    width: `${productL / 50}rem`,
    height: `${productS / 50}rem`,
  };

  if (productL > 0 && productS > 0 && paletteL > 0 && paletteS > 0) {
    const variant1a = paletteL / productL;
    const variant1b = paletteS / productS;

    return {
      total: variant1a * variant1b,
      content: [
        {
          quantity: Array.from(
            { length: Math.floor(variant1a * variant1b) },
            (_, i) => i
          ),
          productStyle: productStyleL,
        },
        {
          quantity: Array.from({ length: Math.floor(variant1a) }, (_, i) => i),
          productStyle: productStyleS,
        },
      ],
    };
  }
  return {
    total: 0,
    content: [
      {
        quantity: [],
        productStyle: productStyleS,
      },
      {
        quantity: [],
        productStyle: productStyleL,
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
