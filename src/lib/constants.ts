import { AlertCircle, Calendar, Megaphone } from "lucide-react";

export const STAFF_MEMBERS = [
  {
    id: 1,
    name: "Muhammet Emin Çelik",
    department: "Full Stack Developer",
    zodiac: "Leo",
  },
  {
    id: 2,
    name: "Burak Gemici",
    department: "Full Stack Developer",
    zodiac: "Pisces",
  },
  {
    id: 3,
    name: "Esra Betül",
    department: "Full Stack Developer",
    zodiac: "Virgo",
  },
  {
    id: 4,
    name: "Berkay Ay",
    department: "Flutter Developer",
    zodiac: "Aquarius",
  },
  {
    id: 5,
    name: "Osman Bay",
    department: "Full Stack Developer",
    zodiac: "Aquarius",
  },
  {
    id: 6,
    name: "Melisa Kamat",
    department: "UI/UX Designer",
    zodiac: "Sagittarius",
  },
  {
    id: 7,
    name: "Alihan Gezer",
    department: "UI/UX Designer",
    zodiac: "Sagittarius",
  },
  {
    id: 8,
    name: "Hande Nur Topuz",
    department: "UI/UX Designer",
    zodiac: "Aries",
  },
  {
    id: 9,
    name: "Faruk Bineroğlu",
    department: "Flutter Developer",
    zodiac: "Gemini",
  },
  {
    id: 10,
    name: "Anıl Sorgit",
    department: "Flutter Developer",
    zodiac: "Virgo",
  },
  {
    id: 11,
    name: "Dilan Akkaya",
    department: "UI/UX Designer",
    zodiac: "Capricorn",
  },
  {
    id: 12,
    name: "Ayşe Rana Kurada",
    department: "UI/UX Designer",
    zodiac: "Scorpio",
  },
  {
    id: 13,
    name: "Doğa Dölekçi",
    department: "UI/UX Designer",
    zodiac: "Aquarius",
  },
  {
    id: 14,
    name: "Hasan Bektaş",
    department: "Flutter Developer",
    zodiac: "Pisces",
  },
  {
    id: 15,
    name: "Furkan Ayan",
    department: "Flutter Developer",
    zodiac: "Taurus",
  },
  {
    id: 16,
    name: "Eymen Varilci",
    department: "Project Manager",
    zodiac: "Pisces",
  },
  {
    id: 17,
    name: "Serhat Yaroğlu",
    department: "IOS Developer",
    zodiac: "Scorpio",
  },
  {
    id: 18,
    name: "Barış Karahüseyin",
    department: "Human Resources",
    zodiac: "Scorpio",
  },
  {
    id: 19,
    name: "Sarp Çetintaş",
    department: "UI/UX Designer",
    zodiac: "Taurus",
  },
  {
    id: 20,
    name: "İlknur Tulgar",
    department: "Flutter Developer",
    zodiac: "Scorpio",
  },
  {
    id: 21,
    name: "Anıl Sezgin",
    department: "Full Stack Developer",
    zodiac: "Libra",
  },
  {
    id: 22,
    name: "Gülberk Aktay",
    department: "UI/UX Designer",
    zodiac: "Taurus",
  },
];

export const DUMMY_USERS = [
  {
    id: "uuid-1907",
    email: "osmanbay@neonapps.com",
    password: "Qwerty123*",
    name: "osmanbay",
    role: "ADMIN"
  },
  {
    id: "uuid-1908",
    email: "osmanbay18@neonapps.com",
    password: "Qwerty123*",
    name: "obay",
    role: "USER"
  },
]

export const ANNOUNCEMENTS = [
  {
    id: 1,
    title: "System Maintenance",
    description:
      "Scheduled maintenance will take place on Sunday from 02:00 to 04:00 UTC.",
    date: "Jun 15, 2026",
    icon: AlertCircle,
  },
  {
    id: 2,
    title: "New Dashboard Features",
    description:
      "Role management and analytics widgets are now available for all admins.",
    date: "Jun 10, 2026",
    icon: Megaphone,
  },
  {
    id: 3,
    title: "Team Meeting",
    description:
      "Monthly team meeting will be held this Friday at 14:00 in the conference room.",
    date: "Jun 13, 2026",
    icon: Calendar,
  },
]

export const ACTIVE_PROJECTS = [
  {
    id: 1,
    name: "Neon Dashboard",
    description: "Admin panel redesign and analytics integration.",
    progress: 78,
    members: 5,
    deadline: "Jun 25, 2026",
  },
  {
    id: 2,
    name: "Mobile App",
    description: "Building the customer-facing mobile application.",
    progress: 45,
    members: 3,
    deadline: "Jul 10, 2026",
  },
  {
    id: 3,
    name: "Authentication System",
    description: "RBAC implementation and security improvements.",
    progress: 92,
    members: 2,
    deadline: "Jun 14, 2026",
  },
];