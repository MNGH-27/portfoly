import { FiCalendar, FiClock, FiGlobe, FiShoppingBag } from "react-icons/fi";
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
    title: { en: "Jalali Datepicker", fa: "انتخاب‌گر تاریخ جلالی" },
    type: {
      en: "Open-Source React Package · npm",
      fa: "پکیج متن‌باز React · npm",
    },
    description: {
      en: "A published, fully typed Jalali date and time picker for React with native Date APIs, no runtime date-library dependency, and flexible UI primitives.",
      fa: "یک انتخاب‌گر تاریخ و زمان جلالی منتشرشده برای React با تایپ کامل، API مبتنی بر Date بومی، بدون وابستگی اجرایی به کتابخانه‌های تاریخ و اجزای رابط منعطف.",
    },
    highlights: [
      {
        en: "Supports inline, popover, and modal layouts with single, range, and multiple-date selection.",
        fa: "از نمایش inline، popover و modal همراه با انتخاب تکی، بازه‌ای و چندتاریخی پشتیبانی می‌کند.",
      },
      {
        en: "Includes time selection, masked input, presets, Iranian holidays, event badges, and light/dark theming.",
        fa: "انتخاب زمان، ورودی ماسک‌شده، presetها، تعطیلات ایران، نشان رویداد و تم روشن و تاریک را ارائه می‌دهد.",
      },
      {
        en: "Exposes a headless hook and provides keyboard navigation, WAI-ARIA semantics, and automated tests.",
        fa: "یک hook بدون رابط ارائه می‌کند و شامل ناوبری کیبورد، استانداردهای WAI-ARIA و تست‌های خودکار است.",
      },
    ],
    stack: ["React", "TypeScript", "Vite", "Vitest", "WAI-ARIA", "npm"],
    links: [
      {
        label: { en: "Source code", fa: "کد منبع" },
        href: "https://github.com/MNGH-27/jalali-datepicker-package",
      },
      {
        label: { en: "View on npm", fa: "مشاهده در npm" },
        href: "https://www.npmjs.com/package/@mngh/jalali-datepicker",
      },
    ],
    downloads: {
      en: "Over 1,000 downloads / week",
      fa: "بیش از ۱۰۰۰ دانلود در هفته",
    },
    icon: FiCalendar,
  },
  {
    title: { en: "Task Scheduler Engine", fa: "موتور زمان‌بندی وظایف" },
    type: {
      en: "Concurrent & Distributed Systems · Go + Redis",
      fa: "سیستم هم‌زمان و توزیع‌شده · Go + Redis",
    },
    description: {
      en: "A Go scheduling library with a dependency-free in-memory engine and a Redis-backed distributed engine for durable, multi-worker job execution.",
      fa: "یک کتابخانه زمان‌بندی با Go شامل موتور in-memory بدون وابستگی و موتور توزیع‌شده مبتنی بر Redis برای اجرای پایدار jobها میان چند worker.",
    },
    highlights: [
      {
        en: "Supports worker pools, delayed scheduling, four priority levels, aging-based fairness, and capacity backpressure.",
        fa: "از worker pool، زمان‌بندی تأخیری، چهار سطح اولویت، fairness مبتنی بر aging و backpressure ظرفیت پشتیبانی می‌کند.",
      },
      {
        en: "Handles retries with exponential backoff and jitter, per-attempt timeouts, cancellation, panic recovery, and graceful shutdown.",
        fa: "retry با exponential backoff و jitter، timeout هر تلاش، لغو عملیات، بازیابی panic و graceful shutdown را مدیریت می‌کند.",
      },
      {
        en: "Uses Redis atomic claims, heartbeats, leases, recovery, and cross-process cancellation for distributed execution.",
        fa: "برای اجرای توزیع‌شده از claim اتمیک Redis، heartbeat، lease، recovery و لغو میان‌پردازه‌ای استفاده می‌کند.",
      },
    ],
    stack: [
      "Go",
      "Redis",
      "Concurrency",
      "Distributed Systems",
      "Docker",
      "Testing",
    ],
    links: [
      {
        label: { en: "Source code", fa: "کد منبع" },
        href: "https://github.com/MNGH-27/task-scheduler-GO",
      },
    ],
    icon: FiClock,
  },
  {
    title: { en: "Oner Shop", fa: "فروشگاه Oner" },
    type: {
      en: "Full-Stack E-commerce · Monorepo",
      fa: "فروشگاه فول‌استک · مونوریپو",
    },
    description: {
      en: "An end-to-end commerce platform combining a Next.js storefront, React administration panel, NestJS API, and PostgreSQL database in one workspace.",
      fa: "یک پلتفرم فروشگاهی کامل شامل فروشگاه Next.js، پنل مدیریت React، API مبتنی بر NestJS و دیتابیس PostgreSQL در یک workspace یکپارچه.",
    },
    highlights: [
      {
        en: "Built catalog, search, cart, coupon, authentication, profile, and variant-aware inventory flows.",
        fa: "جریان‌های کاتالوگ، جستجو، سبد خرید، کد تخفیف، احراز هویت، پروفایل و موجودی مبتنی بر تنوع محصول را پیاده‌سازی کردم.",
      },
      {
        en: "Created a responsive Persian admin panel for products, categories, orders, customers, banners, and coupons.",
        fa: "یک پنل مدیریت فارسی و واکنش‌گرا برای محصولات، دسته‌بندی‌ها، سفارش‌ها، مشتریان، بنرها و کدهای تخفیف ساختم.",
      },
      {
        en: "Designed JWT role-based access, Prisma data models, validated REST APIs, Swagger docs, and low-stock alerts.",
        fa: "دسترسی نقش‌محور JWT، مدل‌های Prisma، REST API اعتبارسنجی‌شده، مستندات Swagger و هشدار کمبود موجودی را طراحی کردم.",
      },
    ],
    stack: ["Next.js", "React", "NestJS", "Prisma", "PostgreSQL", "TypeScript"],
    links: [
      {
        label: { en: "Source code", fa: "کد منبع" },
        href: "https://github.com/MNGH-27/oner-shop-demo",
      },
    ],
    icon: FiShoppingBag,
  },

  {
    title: { en: "TaskFlow API", fa: "API مدیریت وظایف TaskFlow" },
    type: {
      en: "Backend REST API · Go + MySQL",
      fa: "REST API بک‌اند · Go + MySQL",
    },
    description: {
      en: "A production-minded task management API built with Go and MySQL, packaged with Docker Compose and structured around clear HTTP, domain, and persistence layers.",
      fa: "یک API مدیریت وظایف با رویکرد production-ready، ساخته‌شده با Go و MySQL و Docker Compose، با جداسازی روشن لایه‌های HTTP، دامنه و ذخیره‌سازی.",
    },
    highlights: [
      {
        en: "Implements task CRUD, completion filtering, input validation, and consistent JSON error responses.",
        fa: "عملیات کامل CRUD، فیلتر وضعیت انجام‌شدن، اعتبارسنجی ورودی و پاسخ‌های خطای یکپارچه JSON را پیاده‌سازی می‌کند.",
      },
      {
        en: "Separates repository contracts from MySQL persistence and tests handlers with a fast fake repository.",
        fa: "قرارداد repository را از ذخیره‌سازی MySQL جدا می‌کند و handlerها را با یک fake repository سریع تست می‌کند.",
      },
      {
        en: "Includes connection pooling, health checks, schema migration, request logging, graceful shutdown, and a multi-stage image.",
        fa: "شامل connection pooling، health check، migration دیتابیس، ثبت درخواست‌ها، graceful shutdown و image چندمرحله‌ای است.",
      },
    ],
    stack: ["Go", "MySQL", "Docker", "REST API", "SQL", "Testing"],
    links: [
      {
        label: { en: "Source code", fa: "کد منبع" },
        href: "https://github.com/MNGH-27/taskflow-api",
      },
    ],
    icon: SiGo,
  },

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
];

export const documents: DocumentItem[] = [
  {
    title: { en: "Mohsen Nouri — Resume", fa: "رزومه محسن نوری" },
    description: {
      en: "A concise overview of my full-stack skills, professional experience, leadership background, and selected projects.",
      fa: "نمایی خلاصه از مهارت‌های فول‌استک، تجربه حرفه‌ای، سابقه رهبری تیم و پروژه‌های منتخب من.",
    },
    meta: {
      en: "PDF · 2 pages · Updated July 2026",
      fa: "PDF · ۲ صفحه · به‌روزرسانی ژوئیه ۲۰۲۶",
    },
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
    links: [
      {
        label: { en: "Bans (live)", fa: "بنس — لایو" },
        href: "https://bans.ir/",
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
    links: [
      {
        label: { en: "Dornica (live)", fa: "درنیکا — لایو" },
        href: "https://dornica.net/",
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
    links: [
      {
        label: { en: "Roocket (live)", fa: "راکت — لایو" },
        href: "https://roocket.ir/",
      },
    ],
  },
];
