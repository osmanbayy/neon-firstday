import { ANNOUNCEMENTS } from "../constants"
import { Announcement } from "../types/app"

export const getAllAnnouncements = (): Announcement[] => {
  return [...ANNOUNCEMENTS]
}

export const getAnnouncementById = (id: number) => {
  return ANNOUNCEMENTS.find((announcement) => announcement.id === id)
}