const setStorage = (userData: Object) => {
  const jsonValue = JSON.stringify(userData);
  localStorage.setItem(`UserDataMultiverse`, jsonValue);
};

const getStorage = () => {
  const jsonValue = localStorage.getItem(`UserDataMultiverse`);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export { setStorage, getStorage };
