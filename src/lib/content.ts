export const site = {
  url: "https://akmaltezar.github.io",
  name: "Akmal Tezar",
  role: "Mobile & Frontend Engineer",
  email: "akmaltezar.workspace@gmail.com",
  github: "https://github.com/akmaltezar",
  linkedin: "https://www.linkedin.com/in/akmal-tezar-a0379b235",
  location: "Tegal, Indonesia",
  timezone: "GMT+7",
} as const;

export const intro = {
  prompt: "whoami",
  pitch: "I like interfaces that do their job quietly. I build mobile and web apps for simplicity, and I write code my future self won't complain about.",
  pitchSecondary:
    "Four years across React Native, React and Laravel — mobile banking onboarding at CIMB Niaga, IoT hotel apps at Digitels, and client web builds.",
  currently: "Frontend Developer at IDstar · Griya CIMB Niaga Bintaro",
} as const;

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  place: string;
  summary: string;
  stack: readonly string[];
  current?: boolean;
  education?: boolean;
};

export const experience: readonly ExperienceItem[] = [
  {
    period: "2025 — now",
    role: "Frontend Developer",
    company: "IDstar",
    place: "Griya CIMB Niaga Bintaro · Jakarta",
    summary:
      "Frontend for CIMB Niaga's OCTO mobile banking apps, focused on CASA onboarding.",
    stack: ["React Native", "TypeScript", "Firebase", "Redux", "Axios"],
    current: true,
  },
  {
    period: "2023 — 2025",
    role: "Fullstack Developer",
    company: "Digitels",
    place: "PT Digital Hotel Indonesia · Bali",
    summary:
      "Guest, staff and property-management products for IoT-powered smart hotels.",
    stack: [
      "React Native",
      "TypeScript",
      "PHP",
      "Laravel",
      "MQTT",
      "WebSocket",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Fullstack Developer",
    company: "Kencana Konsep",
    place: "PT Kencana Konsep Indonesia · Jakarta",
    summary:
      "Mobile, web and API work for ASN Chat and the SPLP government platform.",
    stack: [
      "React Native",
      "React",
      "TypeScript",
      "Firebase",
      "Socket.IO",
      "Docker",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Frontend Mentor",
    company: "Pondok IT Yogyakarta",
    place: "Yogyakarta",
    summary:
      "Taught HTML, CSS, JavaScript and Git; coached student teams and open-source contributors.",
    stack: ["HTML", "CSS", "JavaScript", "Git"],
  },
  // {
  //   period: "2023 — now",
  //   role: "Information System",
  //   company: "Universitas Siber Asia",
  //   place: "Jakarta",
  //   summary: "Undergraduate degree, taken alongside full-time work.",
  //   stack: [],
  //   education: true,
  // },
];

export const skills: readonly { group: string; items: readonly string[] }[] = [
  {
    group: "languages",
    items: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3"],
  },
  {
    group: "frontend",
    items: [
      "React",
      "Next.js",
      "React Native (CLI, Expo)",
      "Vue",
      "Redux",
      "Axios",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    group: "backend",
    items: ["Laravel", "Firebase", "Supabase", "API integration"],
  },
  {
    group: "realtime",
    items: ["MQTT", "WebSocket", "Socket.IO"],
  },
  {
    group: "tooling",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Postman",
      "Xcode",
      "CodePush",
    ],
  },
];

export type WorkItem = {
  index: string;
  name: string;
  client: string;
  period: string;
  status: "current" | "live" | "shipped";
  summary: string;
  stack: readonly string[];
  href?: string;
};

export const works: readonly WorkItem[] = [
  {
    index: "01",
    name: "OCTO Smart Mobile & Tablet",
    client: "CIMB Niaga · IDstar",
    period: "2025 — now",
    status: "current",
    summary:
      "CASA onboarding for new mobile banking customers — resubmission without re-entry, NIK prefill, service integrations and MFA approval.",
    stack: ["React Native", "TypeScript", "Firebase", "Redux"],
    href: "https://play.google.com/store/apps/details?id=com.rm_tools&pcampaignid=web_share"
  },
  {
    index: "02",
    name: "Digitels",
    client: "Digital Hotel Indonesia",
    period: "2023 — 2025",
    status: "shipped",
    summary:
      "A guest app for IoT-powered smart hotels: control room devices, authenticate, pay and order services from one place.",
    stack: ["React Native", "TypeScript", "MQTT", "Laravel"],
  },
  {
    index: "03",
    name: "PmemeHandal",
    client: "Family project · with my brother",
    period: "side build",
    status: "live",
    summary:
      "A social meme platform for lapak communities — feeds, meme generator, video studio and a browser PDF editor. Built with my brother.",
    stack: ["React", "PHP", "Laravel"],
    href: "https://pmemehandal.com",
  },
  {
    index: "04",
    name: "Lalaka",
    client: "Music festival · client work",
    period: "solo build",
    status: "live",
    summary:
      "A music festival site built end to end — lineup, tickets and event info.",
    stack: ["React", "TypeScript"],
    href: "https://lalaka.live",
  },
];

export type ProjectCategory = "app" | "web";

export type ProjectItem = {
  name: string;
  client: string;
  period: string;
  category: ProjectCategory;
  status: "current" | "live" | "shipped";
  summary: string;
  stack: readonly string[];
  href?: string;
};

export const projects: readonly ProjectItem[] = [
  {
    name: "OCTO Smart Mobile & Tablet",
    client: "CIMB Niaga · IDstar",
    period: "2025 — now",
    category: "app",
    status: "current",
    summary:
      "CASA onboarding for new mobile banking customers, with resubmission, NIK prefill, service integrations and MFA approval.",
    stack: ["React Native", "TypeScript", "Firebase", "Redux"],
    href: "https://play.google.com/store/apps/details?id=com.rm_tools&pcampaignid=web_share"
  },
  {
    name: "Digitels",
    client: "Digital Hotel Indonesia",
    period: "2023 — 2025",
    category: "app",
    status: "shipped",
    summary:
      "Guest app for IoT smart hotels: room control, authentication, payments and service orders.",
    stack: ["React Native", "TypeScript", "MQTT", "WebSocket", "Laravel"],
  },
  {
    name: "Digitels Staff",
    client: "Digital Hotel Indonesia",
    period: "2023 — 2025",
    category: "app",
    status: "shipped",
    summary:
      "Operations app for housekeeping, room service, POS, attendance and gateway pairing.",
    stack: ["React Native", "TypeScript", "MQTT", "WebSocket", "Laravel"],
  },
  {
    name: "Digihome",
    client: "Digital Hotel Indonesia",
    period: "2023 — 2025",
    category: "app",
    status: "shipped",
    summary:
      "A smart-home companion for connected devices, built on the same MQTT and Laravel stack as Digitels.",
    stack: ["React Native", "TypeScript", "MQTT", "WebSocket", "Laravel"],
  },
  {
    name: "ASN Chat",
    client: "Kencana Konsep",
    period: "2022 — 2023",
    category: "app",
    status: "shipped",
    summary:
      "Government messenger with real-time groups, attachments, member management and multiple auth options.",
    stack: ["React Native", "TypeScript", "Firebase", "Socket.IO"],
  },
  {
    name: "Digitels Property Management System",
    client: "Digital Hotel Indonesia",
    period: "2023 — 2025",
    category: "web",
    status: "shipped",
    summary:
      "A web-based property management system for hotel rooms, staff and daily operations.",
    stack: ["React", "TypeScript", "PHP", "Laravel"],
  },
  {
    name: "Lalaka",
    client: "Music festival · client work",
    period: "solo build",
    category: "web",
    status: "live",
    summary:
      "A music festival site built end to end — lineup, tickets and event info.",
    stack: ["React", "TypeScript"],
    href: "https://lalaka.live",
  },
  {
    name: "PmemeHandal",
    client: "Family project · with my brother",
    period: "side build",
    category: "web",
    status: "live",
    summary:
      "A social meme platform for lapak communities, with feeds, a meme generator, video studio and browser PDF editor.",
    stack: ["React", "PHP", "Laravel"],
    href: "https://pmemehandal.com",
  },
  {
    name: "SPLP",
    client: "Kencana Konsep",
    period: "2022 — 2023",
    category: "web",
    status: "shipped",
    summary:
      "A government data-interoperability platform for configuring and maintaining APIs across agencies.",
    stack: ["React", "TypeScript"],
  },
];

export const panels = [
  { id: "intro", label: "intro" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "works", label: "works" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;
