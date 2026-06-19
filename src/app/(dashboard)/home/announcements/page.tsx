import Announcements from "@/components/features/announcements/Announcements"

const AnnouncementsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="p-5">
      <Announcements />
    </div>
  )
}

export default AnnouncementsPage