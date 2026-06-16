import { api } from "../axios"
import { APIPost } from "../types/user";

// Get all posts
export const getPosts = async (): Promise<APIPost[]> => {
  const response = await api.get("/posts");
  return response.data;
}