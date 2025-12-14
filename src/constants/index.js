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
    title: "Gen AI & AI Integration",
    description:
      "Transform your business with intelligent automation. I integrate cutting-edge Gen AI models (OpenAI, Google Gemini, Anthropic) to build smart chatbots, content generators, and AI-powered features that drive engagement and efficiency.",
    items: [
      {
        title: "LLM Integration",
        description: "(OpenAI API, Google Gemini, Anthropic Claude, Custom Models)",
      },
      {
        title: "AI Chatbots & Assistants",
        description: "(Context-aware conversations, RAG systems, Multi-modal AI)",
      },
      {
        title: "AI-Powered Features",
        description: "(Content generation, Image processing, Sentiment analysis, Automation)",
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
    category: "fullstack",
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
    category: "fullstack",
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
    category: "fullstack",
    frameworks: [
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "React" },
      { id: 3, name: "OAuth2 / JWT" },
      { id: 4, name: "Docker" },
    ],
  },
  {
    id: 4,
    name: "V-SAAS – AI SaaS Application",
    description:
      "Developed advanced AI-powered SaaS platform with Cloudinary AI image processing, OpenAI integration for content generation, and intelligent automation features; integrated Stripe for payments (45% ↑ revenue) and built scalable RESTful APIs in Next.js + MongoDB + TypeScript.",
    href: "https://final-seven-xi.vercel.app/",
    image: "/assets/projects/r5.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    category: "genai",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "OpenAI API" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "TypeScript" },
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
    category: "fullstack",
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
    category: "fullstack",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "WebSocket" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 7,
    name: "RAVEL – Travel Booking Platform",
    description:
      "Built a modern travel booking platform with destination browsing, tour packages, and user account management; implemented responsive design with React, dynamic routing, and seamless user experience for planning trips and exploring travel destinations.",
    href: "https://github.com/Vaibhav4228",
    image: "/assets/projects/r6.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    category: "fullstack",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "React Router" },
      { id: 3, name: "CSS3" },
      { id: 4, name: "Responsive Design" },
    ],
  },
  {
    id: 9,
    name: "Prepwise – AI Interview Copilot",
    description:
      "Built an intelligent AI-powered interview preparation platform with real-time speech-to-text analysis, personalized feedback using Google Generative AI and Groq SDK, and comprehensive interview simulations with webcam integration; implemented secure authentication with Clerk and real-time data sync with Firebase.",
    href: "https://ai-interview-platform-weld.vercel.app/",
    image: "/assets/projects/r10.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    category: "genai",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Google GenAI" },
      { id: 3, name: "Groq SDK" },
      { id: 4, name: "Firebase" },
      { id: 5, name: "Clerk Auth" },
    ],
  },
  {
    id: 10,
    name: "V-MIND – AI Resume Analyzer",
    description:
      "Developed an intelligent resume scoring and analysis platform with PDF parsing using PDF.js, automated resume rating system, and comprehensive application tracking dashboard; built with React Router, Zustand for state management, and modern React 19 with TypeScript for type-safe development.",
    href: "https://resume-analyzer-full-stack.vercel.app/",
    image: "/assets/projects/r9.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    category: "genai",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "PDF.js" },
      { id: 3, name: "Zustand" },
      { id: 4, name: "TypeScript" },
      { id: 5, name: "React Router" },
    ],
  },
];

export const pricingTiers = [
  {
    id: 1,
    name: "Starter",
    price: "$25",
    priceINR: "₹2,000",
    period: "hour",
    description: "Perfect for small projects and quick fixes",
    features: [
      "Up to 10 hours/month",
      "Email support",
      "Basic bug fixes",
      "Small feature additions",
      "Code reviews",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "$35",
    priceINR: "₹2,800",
    period: "hour",
    description: "Ideal for growing businesses and medium projects",
    features: [
      "Up to 40 hours/month",
      "Priority email support",
      "Full-stack development",
      "API integrations",
      "Database design",
      "Performance optimization",
      "Weekly progress updates",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    priceINR: "Custom",
    period: "project",
    description: "For complex projects and long-term partnerships",
    features: [
      "Unlimited hours",
      "Dedicated support",
      "Full project management",
      "Microservices architecture",
      "DevOps & CI/CD setup",
      "Security audits",
      "Team collaboration",
      "Custom SLA",
    ],
    popular: false,
  },
];

export const projectPackages = [
  {
    id: 1,
    name: "Landing Page",
    price: "$50",
    priceINR: "₹4,000",
    duration: "1-2 weeks",
    features: [
      "Responsive design",
      "SEO optimization",
      "Contact form",
      "Basic animations",
      "1 revision round",
    ],
  },
  {
    id: 2,
    name: "Full-Stack Web App",
    price: "$200 - $500",
    priceINR: "₹16,000 - ₹40,000",
    duration: "4-8 weeks",
    features: [
      "Frontend + Backend",
      "Database design",
      "User authentication",
      "Payment integration",
      "Admin dashboard",
      "3 revision rounds",
    ],
  },
  {
    id: 3,
    name: "AI-Powered Application",
    price: "$300 - $800",
    priceINR: "₹24,000 - ₹64,000",
    duration: "6-12 weeks",
    features: [
      "AI/ML integration",
      "LLM integration (OpenAI/Gemini)",
      "Real-time features",
      "Scalable architecture",
      "Advanced analytics",
      "5 revision rounds",
    ],
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    price: "$250 - $600",
    priceINR: "₹20,000 - ₹48,000",
    duration: "6-10 weeks",
    features: [
      "Product management",
      "Shopping cart",
      "Payment gateway",
      "Order management",
      "Inventory system",
      "4 revision rounds",
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
