const sideArea = (
  productL: number,
  productS: number,
  paletteL: number,
  paletteS: number
) => {
  const productStyleL = {
    width: `${productS / 50}rem`,
    height: `${productL / 50}rem`,
  };
  const productStyleS = {
    width: `${productL / 50}rem`,
    height: `${productS / 50}rem`,
  };

  const todoA = () => {
    const stepI = Math.floor(paletteL / productS);
    const stepII = Math.floor(paletteS / productL);
    console.log("stepI: ", stepI);
    console.log("stepII: ", stepII);
    return {
      total: stepI * stepII,
      content: [
        {
          quantity: stepI,
          box: productStyleL,
        },
        {
          quantity: stepI,
          box: productStyleL,
        },
      ],
    };
  };

  const todoB = () => {
    const stepI = Math.floor(paletteL / productS);
    const stepII = Math.floor(paletteL / productL);

    return {
      total: stepI + stepII,
      content: [
        {
          quantity: stepI,
          box: productStyleL,
        },
        {
          quantity: stepII,
          box: productStyleS,
        },
      ],
    };
  };

  const todoC = () => {
    const stepI = Math.floor(paletteL / productS);
    const stepII = Math.floor(paletteS / productL);

    return {
      total: stepI * stepII,
      content: [
        {
          quantity: stepI,
          box: productStyleL,
        },
        {
          quantity: stepI,
          box: productStyleL,
        },
      ],
    };
  };

  return todoC();
};

export const getLayerValue = (
  productL: number,
  productS: number,
  paletteL: number,
  paletteS: number
) => {
  if (productL > 0 && productS > 0 && paletteL > 0 && paletteS > 0) {
    const total =
      Math.floor(paletteL / productL) * Math.floor(paletteS / productS);

    return sideArea(productL, productS, paletteL, paletteS);
  }
  return {
    total: 0,
    content: [
      {
        quantity: 0,
        box: {},
      },
      {
        quantity: 0,
        box: {},
      },
    ],
  };
};
