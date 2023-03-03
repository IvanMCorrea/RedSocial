import backendApi from "./config";

const createPost = async (payload) => {
  try {
    const { data } = await backendApi.post("/post/create", payload);
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
};

export { createPost };
