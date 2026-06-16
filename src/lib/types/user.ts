import { LucideIcon } from "lucide-react";

export interface APIUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface APIPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Member {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  department: string;
  zodiac: string;
  zodiacIcon: LucideIcon;
  postCount: number;
}