import { Member } from "@/lib/types/user"
import { useMemo } from "react";

type UseSearchMemberProps = {
  members: Member[];
  search: string;
}

export const useSearchMembers = ({ members, search }: UseSearchMemberProps) => {
  return useMemo(() => {
    const searchQuery = search.trim().toLowerCase();
    if (!searchQuery) return members;

    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery) ||
        member.department.toLowerCase().includes(searchQuery))
  }, [members, search])
}