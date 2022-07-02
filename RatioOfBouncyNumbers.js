// https://www.codewars.com/kata/562b099becfe844f3800000a

function bouncyRatio(bouncyTarget) {
  if (0 < bouncyTarget < 1) throw Error;

  let bouncyCurrent = 0,
    bouncyCount = 0,
    numberToCheck = 100;

  while (bouncyTarget > bouncyCurrent) {
    numberToCheck++;

    let isBouncy = false,
      compareType = undefined;

    (numberToCheck + "").split("").reduce((prevDigit, curDigit, _i, array) => {
      if (prevDigit === curDigit) return curDigit;

      if (compareType === undefined) {
        if (prevDigit > curDigit) compareType = true;
        if (prevDigit < curDigit) compareType = false;
      }

      if (prevDigit > curDigit && compareType) return curDigit;
      if (prevDigit < curDigit && !compareType) return curDigit;

      isBouncy = true;
      array.splice(1);
    });

    if (isBouncy) addBouncy();
  }

  return numberToCheck;

  function addBouncy() {
    bouncyCount++;
    bouncyCurrent = bouncyCount / numberToCheck;
  }
}
