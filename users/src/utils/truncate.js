export const truncate = (string, max) => {
  if (string.length > max) {
    return string.slice(0, max - 1) + "…";
  }
  return string;
};
