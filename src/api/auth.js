import backendApi from "./config";

const startLogin = async ({ username, password }) => {
  try {
    const { data } = await backendApi.post("/user/login", {
      username,
      password,
    });
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
};

const createNewUser = async (payload) => {
  try {
    const { data } = await backendApi.post("/user/register", { data: payload });
    return data;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};

const getUserInfo = async () => {
  try {
    const { data } = await backendApi.get("/user/info");
    return data;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};

const getUsers = async ({ page, keyword }) => {
  try {
    const { data } = await backendApi.get(
      `/user/users/${page}`,
      keyword && { params: { keyword: keyword } }
    );
    return data;
  } catch (error) {
    const res = error.response.data;
    return res;
  }
};

export { startLogin, createNewUser, getUserInfo, getUsers };
