const capitalize = (str) => {
  if (typeof str !== "string" || str.length === 0) return str;

  return str.charAt(0).toUpperCase() + str.substring(1);
};

export default capitalize;
