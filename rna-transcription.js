export const toRna = (string) => {
  if(string === "G")
    return "C";
  else if (string === "C")
    return "G";
  else
    return "";
}

