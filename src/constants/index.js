export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web appsthat users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "VSalon – Multivendor Salon Booking Platform",
    description:
      "Built a multivendor salon platform with role-based access, real-time booking, and admin/vendor dashboards using Spring Boot, Microservices, Docker & Kubernates, React, and MySQL.",
    href: "https://github.com/Vaibhav4228/salon-appoinment-booking-Multivendor-microservices-application",
    image: "/assets/projects/r8.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "Microservices" },
      { id: 3, name: "Docker" },
      { id: 4, name: "React" },
      { id: 5, name: "MySQL" },
    ],
  },
  {
    id: 2,
    name: "VSocial – Social Media App",
    description:
      "Built a full-featured social media platform with posts, chat, stories, reels, likes, comments, and RBAC auth; deployed via Docker & Kubernetes with Spring Boot, React, WebSockets, and PostgreSQL.",
    href: "https://frontend-three-kappa-18.vercel.app/",
    image: "/assets/projects/r7.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "React" },
      { id: 3, name: "WebSockets" },
      { id: 4, name: "Kubernetes" },
      { id: 5, name: "PostgreSQL" },
    ],
  },
  {
    id: 3,
    name: "V-Notes – Note App with MFA",
    description:
      "Created a secure note management app featuring MFA (TOTP via Google Authenticator), OAuth2 login, CSRF-protected APIs, and detailed audit logs using Spring Boot and React.",
    href: "https://v-notes-iota.vercel.app/",
    image: "/assets/projects/r2.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "React" },
      { id: 3, name: "OAuth2 / JWT" },
      { id: 4, name: "Docker" },
    ],
  },
  {
    id: 4,
    name: "Imaginify – AI SaaS Application",
    description:
      "Developed advanced image-processing features using Cloudinary AI with a responsive Tailwind CSS UI; integrated Stripe for payments (45% ↑ revenue) and built RESTful APIs in Next.js + MongoDB + TypeScript.",
    href: "https://final-seven-xi.vercel.app/",
    image: "/assets/projects/r5.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Stripe API" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "TypeScript" },
    ],
  },
  {
    id: 5,
    name: "Agency Website",
    description:
      "Created secure auth and dynamic listings with JWT, MongoDB, and optimized search filters; implemented real-time booking logic with Node.js and Express.",
    href: "https://rayx-zeta.vercel.app/",
    image: "/assets/projects/r3.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "Tailwind" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "MongoDB" },
    ],
  },
  {
    id: 6,
    name: "Real-Time Drawing Tool",
    description:
      "Built a collaborative drawing app with WebSocket for instant multi-user sync; designed a fast, responsive Tailwind UI and ensured real-time state mirroring across clients.",
    href: "https://real-time-drawing-tool.vercel.app/",
    image: "/assets/projects/r1.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "WebSocket" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vaibhav-sharma-6401b4214/",
  },
  {
    name: "GitHub",
    href: "https://github.com/Vaibhav4228",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/vaibhav990/",
  },
  {
    name: "Email",
    href: "mailto:vaibhav200345@gmail.com",
  },
];
