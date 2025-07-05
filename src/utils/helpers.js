export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
