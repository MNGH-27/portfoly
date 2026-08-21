import { FiBarChart2, FiCode, FiGlobe } from "react-icons/fi";
import {
  SiFirefoxbrowser,
  SiGo,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import type {
  DocumentItem,
  Experience,
  Language,
  Localized,
  Project,
  Skill,
} from "@/types/portfolio";

export const CONTACT = {
  email: "mnq13800831@gmail.com",
  github: "https://github.com/MNGH-27",
  linkedin: "https://linkedin.com/in/mohsen-nouri-5a1996216",
} as const;

export const copy = {
  en: {
    brand: "MOHSEN NOURI",
    homeLabel: "Mohsen Nouri — home",
    navigationLabel: "Primary navigation",
    projects: "Projects",
    about: "About",
    documents: "Documents",
    contact: "Contact",
    languageLabel: "Choose language",
    darkMode: "Switch to dark mode",
    lightMode: "Switch to light mode",
    status: "Full-Stack Developer · Frontend · Backend · End-to-End",
    name: "Mohsen Nouri",
    role: "Full-Stack Software Developer",
    intro:
      "I’m a full-stack developer building complete products across frontend and backend — high-performance React and Next.js interfaces, reliable Go and Node.js services, APIs, databases, caching, testing, and delivery.",
    coreSkillsLabel: "Core skills",
    explore: "Explore my work",
    getInTouch: "Get in touch",
    githubEyebrow: "OPEN SOURCE · @MNGH-27",
    githubHeading: "Explore my work on GitHub.",
    githubDescription:
      "Source code, architecture experiments, reusable starters, and browser tools.",
    githubAction: "View profile",
    projectsLabel: "01 / Selected Projects",
    projectsHeading: "A few things I’ve built.",
    aboutLabel: "02 / About Me",
    aboutHeadingOne: "Frontend, backend,",
    aboutHeadingTwo: "and everything between.",
    aboutOne:
      "I’m a full-stack software developer who works comfortably across product layers. On the frontend, I build scalable React and Next.js applications with TypeScript, thoughtful user experience, strong performance, and maintainable design systems.",
    aboutTwo:
      "On the backend, I design Go and Node.js services, NestJS APIs, PostgreSQL and NoSQL data models, Redis caching, GraphQL, automated tests, and CI/CD. I can contribute deeply to either side or own a product end to end.",
    experienceYears: "Years building products",
    backendRuntimes: "Backend runtimes",
    fullStackScope: "End-to-end scope",
    additionalSkills: "Additional skills",
    experienceLabel: "03 / Experience",
    experienceHeading: "Professional experience.",
    documentsLabel: "04 / Documents",
    documentsHeading: "Resume and professional documents.",
    viewDocument: "View document",
    downloadDocument: "Download PDF",
    contactLabel: "Have a project in mind?",
    contactHeading: "Let’s build something useful.",
    startConversation: "Start a conversation",
    copyright: "© 2026 Mohsen Nouri",
    location: "Tehran, Iran",
    backToTop: "Back to top",
  },
  fa: {
    brand: "محسن نوری",
    homeLabel: "محسن نوری — صفحه اصلی",
    navigationLabel: "مسیرهای اصلی",
    projects: "پروژه‌ها",
    about: "درباره من",
    documents: "مستندات",
    contact: "تماس",
    languageLabel: "انتخاب زبان",
    darkMode: "تغییر به حالت تاریک",
    lightMode: "تغییر به حالت روشن",
    status: "توسعه‌دهنده فول‌استک · فرانت‌اند · بک‌اند · انتها‌به‌انتها",
    name: "محسن نوری",
    role: "توسعه‌دهنده نرم‌افزار فول‌استک",
    intro:
      "من یک توسعه‌دهنده فول‌استک هستم که محصول را در هر دو بخش فرانت‌اند و بک‌اند می‌سازم؛ از رابط‌های سریع React و Next.js تا سرویس‌های مطمئن Go و Node.js، API، دیتابیس، کش، تست و انتشار.",
    coreSkillsLabel: "مهارت‌های اصلی",
    explore: "مشاهده پروژه‌ها",
    getInTouch: "تماس با من",
    githubEyebrow: "متن‌باز · @MNGH-27",
    githubHeading: "پروژه‌هایم را در GitHub ببینید.",
    githubDescription:
      "کد منبع، تجربه‌های معماری، استارترهای قابل استفاده مجدد و ابزارهای مرورگر.",
    githubAction: "مشاهده پروفایل",
    projectsLabel: "۰۱ / پروژه‌های منتخب",
    projectsHeading: "بخشی از چیزهایی که ساخته‌ام.",
    aboutLabel: "۰۲ / درباره من",
    aboutHeadingOne: "فرانت‌اند، بک‌اند",
    aboutHeadingTwo: "و تمام مسیر میان آن‌ها.",
    aboutOne:
      "من یک توسعه‌دهنده نرم‌افزار فول‌استک هستم و در لایه‌های مختلف محصول کار می‌کنم. در فرانت‌اند، اپلیکیشن‌های مقیاس‌پذیر React و Next.js را با TypeScript، تجربه کاربری دقیق، کارایی بالا و سیستم‌های طراحی قابل نگهداری می‌سازم.",
    aboutTwo:
      "در بک‌اند، سرویس‌های Go و Node.js، APIهای NestJS، مدل‌های داده PostgreSQL و NoSQL، کش Redis، GraphQL، تست خودکار و CI/CD را طراحی می‌کنم. می‌توانم در هر بخش عمیق کار کنم یا مالکیت یک محصول را از ابتدا تا انتها بر عهده بگیرم.",
    experienceYears: "سال ساخت محصول",
    backendRuntimes: "زبان‌های بک‌اند",
    fullStackScope: "گستره انتها‌به‌انتها",
    additionalSkills: "مهارت‌های تکمیلی",
    experienceLabel: "۰۳ / تجربه کاری",
    experienceHeading: "تجربه‌های حرفه‌ای من.",
    documentsLabel: "۰۴ / مستندات",
    documentsHeading: "رزومه و مدارک حرفه‌ای.",
    viewDocument: "مشاهده سند",
    downloadDocument: "دانلود PDF",
    contactLabel: "پروژه‌ای در ذهن دارید؟",
    contactHeading: "بیایید یک چیز مفید بسازیم.",
    startConversation: "شروع گفتگو",
    copyright: "© ۲۰۲۶ محسن نوری",
    location: "تهران، ایران",
    backToTop: "بازگشت به بالا",
  },
} satisfies Record<Language, Record<string, string>>;

export type PortfolioCopy = Record<keyof (typeof copy)["en"], string>;

export const coreSkills: Skill[] = [
  {
    name: { en: "React.js", fa: "React.js" },
    category: { en: "Frontend", fa: "فرانت‌اند" },
    icon: SiReact,
    color: "#61dafb",
  },
  {
    name: { en: "Next.js", fa: "Next.js" },
    category: { en: "Frontend", fa: "فرانت‌اند" },
    icon: SiNextdotjs,
    color: "var(--text)",
  },
  {
    name: { en: "TypeScript", fa: "TypeScript" },
    category: { en: "Frontend", fa: "فرانت‌اند" },
    icon: SiTypescript,
    color: "#4f9cf9",
  },
  {
    name: { en: "Go", fa: "Go" },
    category: { en: "Backend", fa: "بک‌اند" },
    icon: SiGo,
    color: "#00add8",
  },
  {
    name: { en: "Node.js", fa: "Node.js" },
    category: { en: "Backend", fa: "بک‌اند" },
    icon: SiNodedotjs,
    color: "#72b75b",
  },
  {
    name: { en: "NestJS", fa: "NestJS" },
    category: { en: "Backend", fa: "بک‌اند" },
    icon: SiNestjs,
    color: "#ea315f",
  },
  {
    name: { en: "PostgreSQL", fa: "PostgreSQL" },
    category: { en: "Data", fa: "داده" },
    icon: SiPostgresql,
    color: "#4b88c7",
  },
  {
    name: { en: "Redis", fa: "Redis" },
    category: { en: "Data", fa: "داده" },
    icon: SiRedis,
    color: "#e04b3f",
  },
];

export const moreSkills: Localized[] = [
  { en: "GraphQL", fa: "GraphQL" },
  { en: "REST APIs", fa: "REST API" },
  { en: "SQL / NoSQL", fa: "SQL / NoSQL" },
  { en: "Docker", fa: "Docker" },
  { en: "CI/CD", fa: "CI/CD" },
  { en: "Jest", fa: "Jest" },
  { en: "Data Structures", fa: "ساختمان داده" },
  { en: "Design Systems", fa: "سیستم طراحی" },
  { en: "Data Visualization", fa: "مصورسازی داده" },
  { en: "Web Performance", fa: "بهینه‌سازی وب" },
];

export const projects: Project[] = [
  {
    title: { en: "AI Chat RTL", fa: "راست‌چین چت‌های هوش مصنوعی" },
    type: {
      en: "Firefox Extension · TypeScript",
      fa: "افزونه فایرفاکس · TypeScript",
    },
    description: {
      en: "A focused Firefox extension that makes Persian and Arabic conversations easier to read without changing the rest of each AI product’s interface.",
      fa: "افزونه‌ای متمرکز برای فایرفاکس که خواندن گفتگوهای فارسی و عربی را ساده‌تر می‌کند، بدون اینکه سایر بخش‌های رابط هر محصول تغییر کند.",
    },
    highlights: [
      {
        en: "Adds independent, persistent RTL controls for each supported website.",
        fa: "برای هر وب‌سایت کنترل مستقل و ماندگار RTL فراهم می‌کند.",
      },
      {
        en: "Uses site-specific adapters for ChatGPT, Gemini, and Claude.",
        fa: "برای ChatGPT، Gemini و Claude از آداپتورهای اختصاصی استفاده می‌کند.",
      },
      {
        en: "Keeps code blocks and mathematical content in LTR for readability.",
        fa: "بلوک‌های کد و محتوای ریاضی را برای خوانایی به‌صورت LTR نگه می‌دارد.",
      },
    ],
    stack: ["TypeScript", "React", "Vite", "WebExtensions"],
    links: [
      {
        label: { en: "Source code", fa: "کد منبع" },
        href: "https://github.com/MNGH-27/firefox-ai-rtl-extention",
      },
      {
        label: { en: "Download extension", fa: "دانلود افزونه" },
        href: "https://github.com/MNGH-27/firefox-ai-rtl-extention/releases/latest",
      },
    ],
    icon: SiFirefoxbrowser,
  },
  {
    title: { en: "Monorepo Boilerplate", fa: "قالب آماده مونوریپو" },
    type: { en: "Full-Stack Architecture", fa: "معماری فول‌استک" },
    description: {
      en: "A reusable pnpm and Turborepo workspace for building Next.js products with a shared shadcn/ui component package and consistent tooling.",
      fa: "یک workspace قابل استفاده مجدد با pnpm و Turborepo برای ساخت محصولات Next.js با پکیج مشترک shadcn/ui و ابزارهای یکپارچه.",
    },
    highlights: [
      {
        en: "Organizes applications and shared packages through a scalable workspace structure.",
        fa: "اپلیکیشن‌ها و پکیج‌های مشترک را در یک ساختار workspace مقیاس‌پذیر سازمان‌دهی می‌کند.",
      },
      {
        en: "Documents reusable UI components in an isolated Storybook application.",
        fa: "کامپوننت‌های رابط قابل استفاده مجدد را در یک اپلیکیشن مستقل Storybook مستند می‌کند.",
      },
      {
        en: "Centralizes TypeScript and ESLint configuration across the codebase.",
        fa: "تنظیمات TypeScript و ESLint را در کل کدبیس متمرکز می‌کند.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Turborepo", "pnpm", "shadcn/ui", "Storybook"],
    links: [
      {
        label: { en: "Source code", fa: "کد منبع" },
        href: "https://github.com/MNGH-27/monorepo-boilerplate",
      },
    ],
    icon: FiCode,
  },
  {
    title: {
      en: "Bonyad Maskan e-Services",
      fa: "خدمات الکترونیک بنیاد مسکن",
    },
    type: {
      en: "Frontend · Public Services",
      fa: "فرانت‌اند · خدمات عمومی",
    },
    description: {
      en: "Frontend development for a national citizen-services portal, focused on clear service discovery, reliable request flows, and maintainable UI.",
      fa: "توسعه فرانت‌اند پرتال خدمات شهروندی در مقیاس ملی با تمرکز بر دسترسی روشن به خدمات، جریان پایدار درخواست‌ها و رابط قابل نگهداری.",
    },
    highlights: [
      {
        en: "Built citizen-facing service discovery and online request flows.",
        fa: "جریان‌های کشف خدمات و ثبت درخواست آنلاین برای شهروندان را توسعه دادم.",
      },
      {
        en: "Created reusable frontend patterns across housing-related programs.",
        fa: "الگوهای فرانت‌اند قابل استفاده مجدد برای خدمات مختلف حوزه مسکن ایجاد کردم.",
      },
      {
        en: "Prioritized clear states and dependable behavior for a national audience.",
        fa: "روی وضعیت‌های روشن و رفتار پایدار برای کاربران در مقیاس ملی تمرکز کردم.",
      },
    ],
    stack: ["React", "Next.js", "TypeScript", "REST APIs"],
    links: [
      {
        label: { en: "Live website", fa: "وب‌سایت زنده" },
        href: "http://eservices.bonyadmaskan.ir/",
      },
    ],
    icon: FiGlobe,
  },
  {
    title: { en: "Rasad Bonyad Maskan", fa: "رصد بنیاد مسکن" },
    type: { en: "Frontend · BI Dashboard", fa: "فرانت‌اند · داشبورد BI" },
    description: {
      en: "Built and maintained a BI dashboard for senior management, turning live and aggregated data into clear, performant KPI and chart views.",
      fa: "ساخت و نگهداری داشبورد BI برای مدیران ارشد و تبدیل داده‌های زنده و تجمیعی به نماهای سریع و روشن KPI و نمودارها.",
    },
    highlights: [
      {
        en: "Built dense management dashboards with KPI and chart-heavy views.",
        fa: "داشبوردهای مدیریتی متراکم با نماهای KPI و نمودارمحور ساختم.",
      },
      {
        en: "Turned live and aggregated datasets into decision-support visualizations.",
        fa: "داده‌های زنده و تجمیعی را به مصورسازی‌های مناسب تصمیم‌گیری تبدیل کردم.",
      },
      {
        en: "Maintained clear, stable interactions while rendering large datasets.",
        fa: "هنگام نمایش دیتاست‌های بزرگ، تعاملات شفاف و پایدار را حفظ کردم.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Highcharts", "Chart.js"],
    links: [
      {
        label: { en: "Live website", fa: "وب‌سایت زنده" },
        href: "https://rasad.bonyadmaskan.ir/",
      },
    ],
    icon: FiBarChart2,
  },
];

export const documents: DocumentItem[] = [
  {
    title: { en: "Mohsen Nouri — Resume", fa: "رزومه محسن نوری" },
    description: {
      en: "A concise overview of my full-stack skills, professional experience, leadership background, and selected projects.",
      fa: "نمایی خلاصه از مهارت‌های فول‌استک، تجربه حرفه‌ای، سابقه رهبری تیم و پروژه‌های منتخب من.",
    },
    meta: { en: "PDF · 2 pages · Updated July 2026", fa: "PDF · ۲ صفحه · به‌روزرسانی ژوئیه ۲۰۲۶" },
    href: "./Mohsen-Nouri-Resume.pdf",
  },
];

export const experience: Experience[] = [
  {
    company: {
      en: "Shahid Rajaee University · Software Project Team",
      fa: "دانشگاه تربیت دبیر شهید رجایی · تیم پروژه نرم‌افزار",
    },
    role: {
      en: "Software Developer & Team Leader",
      fa: "توسعه‌دهنده نرم‌افزار و رهبر تیم",
    },
    context: {
      en: "University-based collaboration delivering public-sector platforms",
      fa: "همکاری دانشگاه‌محور برای توسعه سامانه‌های دولتی",
    },
    teamNote: {
      en: "Hands-on contributor and manager of a 20-person software team",
      fa: "عضو اجرایی و مدیر یک تیم نرم‌افزاری ۲۰ نفره",
    },
    date: { en: "Feb 2024 — Present", fa: "فوریه ۲۰۲۴ — اکنون" },
    highlights: [
      {
        en: "Directed delivery of public-sector platforms, including Sirat 2 for the Special Education Organization.",
        fa: "هدایت تحویل سامانه‌های دولتی، از جمله سیرت ۲ برای سازمان آموزش‌وپرورش استثنایی.",
      },
      {
        en: "Build data-heavy React and Next.js dashboards and support secure CI/CD practices with DevOps.",
        fa: "ساخت داشبوردهای داده‌محور با React و Next.js و همکاری با DevOps برای CI/CD امن.",
      },
    ],
    links: [
      {
        label: { en: "Sirat 2", fa: "سیرت ۲" },
        href: "https://sirat2.csdeo.ir/",
      },
    ],
  },
  {
    company: { en: "Bans", fa: "بنس" },
    role: {
      en: "Software Developer",
      fa: "توسعه‌دهنده نرم‌افزار",
    },
    date: { en: "Jul 2024 — Jul 2025", fa: "ژوئیه ۲۰۲۴ — ژوئیه ۲۰۲۵" },
    highlights: [
      {
        en: "Delivered frontend and backend features for scalable, secure web products.",
        fa: "توسعه قابلیت‌های فرانت‌اند و بک‌اند برای محصولات وب مقیاس‌پذیر و امن.",
      },
      {
        en: "Added caching for frequently accessed data to reduce server load and response time.",
        fa: "پیاده‌سازی کش داده‌های پرتکرار برای کاهش بار سرور و زمان پاسخ‌گویی.",
      },
    ],
  },
  {
    company: { en: "Dornica", fa: "درنیکا" },
    role: {
      en: "Software Developer · Frontend Team Supervisor",
      fa: "توسعه‌دهنده نرم‌افزار · سرپرست تیم فرانت‌اند",
    },
    date: { en: "Sep 2022 — Nov 2023", fa: "سپتامبر ۲۰۲۲ — نوامبر ۲۰۲۳" },
    highlights: [
      {
        en: "Supervised and mentored a five-person frontend team working with Next.js and TypeScript.",
        fa: "سرپرستی و منتورینگ تیم پنج‌نفره فرانت‌اند با Next.js و TypeScript.",
      },
      {
        en: "Set development standards and oversaw planning, code reviews, and quality assurance.",
        fa: "تعریف استانداردهای توسعه و نظارت بر برنامه‌ریزی، بازبینی کد و تضمین کیفیت.",
      },
    ],
  },
  {
    company: { en: "Freelance", fa: "فریلنس" },
    role: { en: "Frontend Developer", fa: "توسعه‌دهنده فرانت‌اند" },
    date: { en: "May 2021 — Apr 2022", fa: "مه ۲۰۲۱ — آوریل ۲۰۲۲" },
    highlights: [
      {
        en: "Built Next.js and TypeScript features for Shahid Rajaee Teacher Training University.",
        fa: "توسعه قابلیت‌های Next.js و TypeScript برای دانشگاه تربیت دبیر شهید رجایی.",
      },
      {
        en: "Delivered a React PWA with IndexedDB and custom JavaScript solutions for public and enterprise clients.",
        fa: "تحویل PWA مبتنی بر React و IndexedDB و راهکارهای JavaScript برای مشتریان دولتی و سازمانی.",
      },
    ],
  },
  {
    company: { en: "Roocket", fa: "راکت" },
    role: { en: "Frontend Developer", fa: "توسعه‌دهنده فرانت‌اند" },
    date: { en: "Mar 2020 — Apr 2021", fa: "مارس ۲۰۲۰ — آوریل ۲۰۲۱" },
    highlights: [
      {
        en: "Delivered frontend features and redesigned key user flows, contributing to 50% higher customer satisfaction.",
        fa: "توسعه قابلیت‌های فرانت‌اند و بازطراحی جریان‌های اصلی با نتیجه‌ی افزایش ۵۰ درصدی رضایت کاربران.",
      },
      {
        en: "Integrated Next.js server-side rendering to improve initial load performance and SEO.",
        fa: "پیاده‌سازی SSR در Next.js برای بهبود سرعت بارگذاری اولیه و SEO.",
      },
    ],
  },
];
