function hammingWeight(number) {
  let onesCount = 0;
  while (number > 0) {
    if (number % 2 === 1) {
      onesCount++;
    }
    number = (number - (number % 2)) / 2;
  }
  return onesCount;
}
