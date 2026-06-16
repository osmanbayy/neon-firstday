import { STAFF_MEMBERS } from "../constants";
import { APIPost, APIUser, Member } from "../types/user";

export const mapUserToMembers = (
  users: APIUser[],
  posts: APIPost[],
): Member[] => {
  return users.map((user) => {
    const userPosts = posts.filter(
      (post) => post.userId === user.id
    );

    const staff =
      STAFF_MEMBERS[
        (user.id - 1) %
        STAFF_MEMBERS.length
      ];

    return {
      id: user.id,

      // From Local Staff
      name: staff.name,
      department: staff.department,
      zodiac: staff.zodiac,
      zodiacIcon: staff.zodiacIcon,

      // From API
      username: user.username,
      email: user.email,
      phone: user.phone,

      // Derived data
      postCount: userPosts.length,
    };
  });
};