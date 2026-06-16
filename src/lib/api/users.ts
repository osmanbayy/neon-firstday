import { api } from "../axios"
import { APIUser } from "../types/user";

// Get all users
export const getUsers = async (): Promise<APIUser[]> => {
  const response = await api.get("/users");
  return response.data;
}