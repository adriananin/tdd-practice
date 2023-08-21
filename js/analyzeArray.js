const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
};

export default analyzeArray;
