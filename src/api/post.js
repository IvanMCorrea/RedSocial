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
const getAllPosts = async () => {
  try {
    const { data } = await backendApi.get("/post");
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
};

const getUserPosts = async (id) => {
  try {
    const { data } = await backendApi.get(`/post/${id}`);
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
};

export { createPost, getAllPosts, getUserPosts };
