const reverseString = (str, i = str.length - 1, res = "") => {
  if (i < 0) return res;

  if (typeof str !== "string") return str;

  return reverseString(str, i - 1, res + str[i]);
};

export default reverseString;
