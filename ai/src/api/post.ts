import api from "./api";

export async function getFeedPosts() {
  const res = await api.get("/feed");
  return res.data;
}

export async function createPost(data: { content: string; images?: string[] }) {
  const res = await api.post("/posts", data);
  return res.data;
}
