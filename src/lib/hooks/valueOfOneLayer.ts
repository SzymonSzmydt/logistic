type TArea = {
  sideA: number;
  sideB: number;
};

const howManyOccures = (area: number, opA: number, opB: number): TArea => {
  const occ = Math.floor(area / opA);
  const rest = area - occ * opA;

  if (rest > opB) {
    const area = howManyOccures(rest, opB, opA);
    return { sideA: occ, sideB: area.sideA };
  }
  return { sideA: occ, sideB: rest };
};

export const sideArea = (
  prodL: number,
  prodS: number,
  palL: number,
  palS: number
) => {
  const productStyleL = {
    width: `${prodS / 50}rem`,
    height: `${prodL / 50}rem`,
  };
  const productStyleS = {
    width: `${prodL / 50}rem`,
    height: `${prodS / 50}rem`,
  };
  const longSide = howManyOccures(palL, prodL, prodS);
  const shortSide = howManyOccures(palS, prodS, prodL);

  console.log("longSide: ", longSide);
  console.log("shortSide: ", shortSide);
};
