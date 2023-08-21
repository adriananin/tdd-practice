const caesarCipher = (str, shiftFactor) => {
  if (shiftFactor < 0) {
    shiftFactor = (26 - Math.abs(shiftFactor)) % 26;
  }

  return str.replace(/[a-zA-Z]/g, (char) => {
    const baseCharCode = char.charCodeAt(0);
    const offset = char.toLowerCase() === char ? 97 : 65;
    const shiftedCharCode =
      ((baseCharCode - offset + shiftFactor) % 26) + offset;
    return String.fromCharCode(shiftedCharCode);
  });
};

export default caesarCipher;
