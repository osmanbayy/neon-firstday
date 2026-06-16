import { getPosts } from "@/lib/api/posts";
import { getUsers } from "@/lib/api/users";
import { mapUserToMembers } from "@/lib/mappers/user.mapper";
import { Member, APIPost, APIUser } from "@/lib/types/user";
import { useQuery } from "@tanstack/react-query";

type MembersResponse = {
  users: APIUser[];
  posts: APIPost[];
};

export const useMembers = () => {
  return useQuery<
    MembersResponse,
    Error,
    Member[]
  >({
    queryKey: ["members"],

    queryFn: async () => {
      const [users, posts] = await Promise.all([
        getUsers(),
        getPosts(),
      ]);

      return { users, posts };
    },

    select: (data) => {
      const expandedUsers = Array.from(
        { length: 100 },
        (_, batch) =>
          data.users.map((user) => ({
            ...user,
            id: batch * data.users.length + user.id,
          }))
      ).flat();

      return mapUserToMembers(expandedUsers, data.posts);
    },

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 15,
  });
};