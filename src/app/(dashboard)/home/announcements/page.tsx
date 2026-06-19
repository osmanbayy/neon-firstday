import Announcements from "@/components/features/announcements/Announcements"

<<<<<<< HEAD
const AnnouncementsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
=======
const AnnouncementsPage = () => {
>>>>>>> a0900fb9cbe3ca504cedbc447745de8834fc1b80
  return (
    <div className="p-5">
      <Announcements />
    </div>
  )
}

export default AnnouncementsPage