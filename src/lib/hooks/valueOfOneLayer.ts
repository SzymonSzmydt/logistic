const variant = (
  productW: number,
  productH: number,
  palleteW: number,
  palleteH: number
) => {
  const variant1a = palleteW / productW;
  const variant1b = palleteH / productH;
  return variant1a * variant1b;
};

export const getLayerValue = (
  productW: number,
  productH: number,
  palleteW: number,
  palleteH: number
): number => {
  const variantA = variant(productW, productH, palleteW, palleteH);
    const variantB = variant(productH, productW, palleteH, palleteW);
    
  return Math.floor(Math.max(variantA, variantB));
};
