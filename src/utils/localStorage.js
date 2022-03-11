const setLocalData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const getLocalData = key => JSON.parse(localStorage.getItem(key));

export { setLocalData, getLocalData };
