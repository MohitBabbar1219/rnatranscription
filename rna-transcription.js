const dnaToRnaMap = (character) => {
  if(character === "G")
    return "C";
  else if (character === "C")
    return "G";
  else if (character === "A")
    return "U";
  else if (character === "T")
    return "A";
  else
    return "";
};
export const toRna = (string) => {
  return string.split("").map(character => dnaToRnaMap(character)).join("");
};
