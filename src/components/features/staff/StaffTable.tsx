"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Mail, Phone } from "lucide-react";
import { Member } from "@/lib/types/user";
import { Highlight } from "./Highlight";

interface StaffTableProps {
  data: Member[];
  search: string;
}

export function StaffTable({
  data,
  search
}: StaffTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Zodiac</TableHead>
            <TableHead className="text-right">
              Posts
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((staff) => {
            const ZodiacIcon =
              staff.zodiacIcon;

            return (
              <TableRow key={staff.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">
                      <Highlight text={staff.name} query={search} />
                    </p>

                    <p className="text-xs text-muted-foreground">
                      @{staff.username}
                    </p>
                  </div>
                </TableCell>

                <TableCell>
                  <Highlight query={search} text={staff.department} />
                </TableCell>

                <TableCell>
                  {staff.role}
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Mail size={14} />

                    {staff.email}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2">
                    <Phone size={14} />

                    {staff.phone}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="inline-flex items-center gap-2 rounded-full border px-2 py-1 text-xs">
                    <ZodiacIcon size={14} />

                    {staff.zodiac}
                  </div>
                </TableCell>

                <TableCell className="text-right font-medium">
                  {staff.postCount}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}