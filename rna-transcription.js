const dnaToRnaMap = {
  "G": "C",
  "C": "G",
  "A": "U",
  "T": "A"
};
export const toRna = (string) => {
  return string.split("").map(character => {
    if (dnaToRnaMap[character])
      return dnaToRnaMap[character];
    else
      throw "Invalid input DNA."
  }).join("");
};
