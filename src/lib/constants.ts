import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Megaphone,
  Users,
  ZodiacAquarius,
  ZodiacAries,
  ZodiacCancer,
  ZodiacCapricorn,
  ZodiacGemini,
  ZodiacLeo,
  ZodiacLibra,
  ZodiacPisces,
  ZodiacSagittarius,
  ZodiacScorpio,
  ZodiacTaurus,
  ZodiacVirgo,
} from "lucide-react";

export const STAFF_MEMBERS = [
  {
    id: 1,
    name: "Muhammet Emin Çelik",
    department: "Full Stack Developer",
    zodiac: "Leo",
    zodiacIcon: ZodiacLeo
  },
  {
    id: 2,
    name: "Burak Gemici",
    department: "Full Stack Developer",
    zodiac: "Pisces",
    zodiacIcon: ZodiacPisces
  },
  {
    id: 3,
    name: "Esra Betül",
    department: "Full Stack Developer",
    zodiac: "Virgo",
    zodiacIcon: ZodiacVirgo
  },
  {
    id: 4,
    name: "Berkay Ay",
    department: "Flutter Developer",
    zodiac: "Aquarius",
    zodiacIcon: ZodiacAquarius
  },
  {
    id: 5,
    name: "Osman Bay",
    department: "Full Stack Developer",
    zodiac: "Aquarius",
    zodiacIcon: ZodiacAquarius
  },
  {
    id: 6,
    name: "Melisa Kamat",
    department: "UI/UX Designer",
    zodiac: "Sagittarius",
    zodiacIcon: ZodiacSagittarius
  },
  {
    id: 7,
    name: "Alihan Gezer",
    department: "UI/UX Designer",
    zodiac: "Sagittarius",
    zodiacIcon: ZodiacSagittarius
  },
  {
    id: 8,
    name: "Hande Nur Topuz",
    department: "UI/UX Designer",
    zodiac: "Aries",
    zodiacIcon: ZodiacAries
  },
  {
    id: 9,
    name: "Faruk Bineroğlu",
    department: "Flutter Developer",
    zodiac: "Gemini",
    zodiacIcon: ZodiacGemini
  },
  {
    id: 10,
    name: "Anıl Sorgit",
    department: "Flutter Developer",
    zodiac: "Virgo",
    zodiacIcon: ZodiacVirgo
  },
  {
    id: 11,
    name: "Dilan Akkaya",
    department: "UI/UX Designer",
    zodiac: "Capricorn",
    zodiacIcon: ZodiacCapricorn
  },
  {
    id: 12,
    name: "Ayşe Rana Kurada",
    department: "UI/UX Designer",
    zodiac: "Scorpio",
    zodiacIcon: ZodiacScorpio
  },
  {
    id: 13,
    name: "Doğa Dölekçi",
    department: "UI/UX Designer",
    zodiac: "Aquarius",
    zodiacIcon: ZodiacAquarius
  },
  {
    id: 14,
    name: "Hasan Bektaş",
    department: "Flutter Developer",
    zodiac: "Pisces",
    zodiacIcon: ZodiacPisces
  },
  {
    id: 15,
    name: "Furkan Ayan",
    department: "Flutter Developer",
    zodiac: "Taurus",
    zodiacIcon: ZodiacTaurus
  },
  {
    id: 16,
    name: "Eymen Varilci",
    department: "Project Manager",
    zodiac: "Pisces",
    zodiacIcon: ZodiacPisces
  },
  {
    id: 17,
    name: "Serhat Yaroğlu",
    department: "IOS Developer",
    zodiac: "Scorpio",
    zodiacIcon: ZodiacScorpio
  },
  {
    id: 18,
    name: "Barış Karahüseyin",
    department: "Human Resources",
    zodiac: "Scorpio",
    zodiacIcon: ZodiacScorpio
  },
  {
    id: 19,
    name: "Sarp Çetintaş",
    department: "UI/UX Designer",
    zodiac: "Taurus",
    zodiacIcon: ZodiacTaurus
  },
  {
    id: 20,
    name: "İlknur Tulgar",
    department: "Flutter Developer",
    zodiac: "Scorpio",
    zodiacIcon: ZodiacScorpio
  },
  {
    id: 21,
    name: "Anıl Sezgin",
    department: "Full Stack Developer",
    zodiac: "Libra",
    zodiacIcon: ZodiacLibra
  },
  {
    id: 22,
    name: "Gülberk Aktay",
    department: "UI/UX Designer",
    zodiac: "Taurus",
    zodiacIcon: ZodiacTaurus
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

export const STATS = [
  {
    id: 1,
    label: "Team Members",
    value: "22",
    helper: "Across 6 departments",
    trend: "+4 this month",
    icon: Users,
  },
  {
    id: 2,
    label: "Active Projects",
    value: "3",
    helper: "In delivery pipeline",
    trend: "72% avg progress",
    icon: FolderKanban,
  },
  {
    id: 3,
    label: "Completed Tasks",
    value: "128",
    helper: "Closed this sprint",
    trend: "+18% from last sprint",
    icon: CheckCircle2,
  },
  {
    id: 4,
    label: "Upcoming Deadlines",
    value: "5",
    helper: "Due in the next 14 days",
    trend: "2 high priority",
    icon: Clock3,
  },
];

export const EVENTS = [
  {
    id: 1,
    type: "task_completed",
    title: "Landing page completed",
    description: "Sarah marked the landing page design task as completed.",
    createdAt: "2026-06-12T10:30:00Z",
  },
  {
    id: 2,
    type: "user_joined",
    title: "Osman joined the team",
    description: "Osman Hasanoğlu has accepted the invitation and joined as Developer.",
    createdAt: "2026-06-11T08:15:00Z",
  },
  {
    id: 3,
    type: "payment_received",
    title: "New Subscription Payment",
    description: "Acme Corp renewed their Enterprise plan ($499.00).",
    createdAt: "2026-06-11T14:22:00Z",
  },
  {
    id: 4,
    type: "system_alert",
    title: "High CPU Usage Warning",
    description: "Server-prod-01 CPU utilization exceeded 92% for 5 minutes.",
    createdAt: "2026-06-10T23:45:12Z",
  },
  {
    id: 5,
    type: "task_created",
    title: "New Task Created",
    description: "John created a new task: 'Fix checkout edge-case bug'.",
    createdAt: "2026-06-10T11:05:00Z",
  },
  {
    id: 6,
    type: "settings_updated",
    title: "Security Settings Changed",
    description: "Two-Factor Authentication (2FA) was made mandatory for all admins.",
    createdAt: "2026-06-09T09:00:00Z",
  },
  {
    id: 7,
    type: "user_left",
    title: "Team Member Left",
    description: "Ayşe Kaplan has been removed from the workspace.",
    createdAt: "2026-06-08T17:30:00Z",
  }
];

export const ZODIACS = [
  { id: 1, title: "Aries", icon: ZodiacAries },
  { id: 2, title: "Taurus", icon: ZodiacTaurus },
  { id: 3, title: "Gemini", icon: ZodiacGemini },
  { id: 4, title: "Cancer", icon: ZodiacCancer },
  { id: 5, title: "Leo", icon: ZodiacLeo },
  { id: 6, title: "Virgo", icon: ZodiacVirgo },
  { id: 7, title: "Libra", icon: ZodiacLibra },
  { id: 8, title: "Scorpio", icon: ZodiacScorpio },
  { id: 9, title: "Sagittarius", icon: ZodiacSagittarius },
  { id: 10, title: "Capricorn", icon: ZodiacCapricorn },
  { id: 11, title: "Aquarius", icon: ZodiacAquarius },
  { id: 12, title: "Pisces", icon: ZodiacPisces },
]

export const DEPARTMENTS = [
  { id: "eng", title: "Engineering" },
  { id: "prd", title: "Product Management" },
  { id: "dsn", title: "Design" },
  { id: "mkt", title: "Marketing & Sales" },
  { id: "hr", title: "Human Resources" },
  { id: "fin", title: "Finance" },
];