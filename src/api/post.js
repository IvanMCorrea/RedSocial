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

const getAllPosts = async (page) => {
  try {
    const { data } = await backendApi.get(`/post/${page}`);
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
};

const getUserPosts = async (id) => {
  try {
    const { data } = await backendApi.get(`/post/userPosts/${id}`);
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
};

const updateLike = async (postId, userId) => {
  try {
    const { data } = await backendApi.put("/post/updateLikes", {data: { postId, userId }});
    return data;
  } catch (err) {
    const res = err.response.data;
    return res;
  }
}

export { createPost, getAllPosts, getUserPosts, updateLike };
