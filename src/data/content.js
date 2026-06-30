// ---------------------------------------------------------------------------
// EDIT EVERYTHING HERE
// ---------------------------------------------------------------------------
// All site content lives in this one file so you can update copy, projects,
// skills, and links without touching component code. Search for "TODO" to find
// placeholder links you should replace with your real ones.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Nurali Kunayev",
  firstName: "Nurali",
  role: "Software Engineer",
  tagline:
    "Computer Science graduate building software, AI-powered tools, data-driven applications, and interactive experiences.",
  email: "nuralikunayev@gmail.com",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  github: "https://github.com/nkunayev",
  linkedin: "https://www.linkedin.com/in/nurali-kunayev/",
};

export const about = {
  // Each string is its own paragraph.
  paragraphs: [
    "I'm a Computer Science graduate from the University of Illinois Chicago who likes turning ideas into things people can actually use \u2014 full-stack apps, AI and recommendation systems, data dashboards, Unity games, database systems, and client-server applications.",
    "I started out in Biomedical Engineering before switching to Computer Science. That detour stuck with me: I care as much about the real-world problem a piece of software solves as I do about the code that solves it.",
    "Originally from Kazakhstan and now based in the United States, I work across the stack and enjoy the spread \u2014 from low-level systems and databases to game mechanics and AI-driven product features.",
  ],
  cards: [
    { label: "Location", value: "United States" },
    { label: "Origin", value: "Kazakhstan" },
    { label: "Education", value: "BS Computer Science, UIC" },
    { label: "Languages", value: "English, Russian, Kazakh" },
  ],
};

// Featured projects. Add/remove entries freely; the grid adapts.
// Set github/demo to null to hide that link on a card.
export const projects = [
  {
    title: "BuySmart",
    subtitle: "AI Shopping Assistant Chrome Extension",
    date: "Feb 2026",
    description:
      "A Chrome extension built for the SparkHacks UIC hackathon that helps users compare products, understand purchase intent, track prices, and make smarter buying decisions on Amazon and Grainger. I worked on the AI / recommendation logic, intent parsing, budget and category matching, explainability, ROI comparison, and price forecasting.",
    tech: [
      "JavaScript",
      "Chrome Extension APIs",
      "AI / Recommendation Logic",
      "Web Scraping",
      "Product Data",
    ],
    github: "https://github.com/nkunayev/BuySmart",
    demo: null,
    featured: true,
  },
  {
    title: "Smart Grocery",
    subtitle: "Cross-Platform Mobile App",
    date: "Oct–Dec 2025",
    description:
      "A grocery-focused software project centered on user interface design, planning, filtering, and practical improvements to the shopping experience.",
    tech: ["UI Design", "Prototyping", "Front-End Concepts"],
    github: "https://github.com/nkunayev/Smart-Grocery",
    demo: null,
    featured: true,
  },
  {
    title: "TropeSearch",
    subtitle: "Searchable Media Trope Platform",
    date: "Oct–Dec 2025",
    description:
      "A searchable web platform for exploring media tropes and related content. I worked on improving the user experience by designing a clean interface, organizing trope data, and making it easier for users to discover patterns across stories, characters, and genres.",
    tech: ["Web Development", "UI/UX Design", "Data Organization", "Search"],
    github: "https://github.com/nkunayev/TropeSearch",
    demo: null,
    featured: true,
  },
  {
    title: "Cat is Liquid",
    subtitle: "3D Unity Game",
    date: "Mar–Apr 2026",
    description:
      "A 3D Unity URP puzzle-stealth game where you control a cat that switches between solid and liquid forms to escape a lab. I built the form-switching mechanics, UI feedback, liquid timer, player movement, puzzles, shaders, audio feedback, and environment polish.",
    tech: ["Unity", "C#", "URP", "Game Design", "Shaders", "UI", "Audio"],
    github: "https://github.com/nkunayev/Cat-is-Liquid",
    demo: null,
    featured: false,
  },
  {
    title: "Connect Four",
    subtitle: "Client-Server Game",
    date: "Apr 2025",
    description:
      "A multiplayer Connect Four application with a GUI, login, chat, waiting room, restart functionality, and a full client-server architecture.",
    tech: ["Java", "JavaFX", "Client-Server Networking", "GUI"],
    github: "https://github.com/nkunayev/connect_4",
    demo: null,
    featured: false,
  },
  {
    title: "Crime Analysis",
    subtitle: "Chicago Crime Data Analysis",
    date: "Apr 2026",
    description:
      "An exploratory data analysis of Chicago crime data, identifying patterns across time, location, and crime type. Built visualizations to surface trends and insights from large public datasets.",
    tech: ["Python", "Data Analysis", "Data Visualization", "Pandas"],
    github: "https://github.com/nkunayev/Crime-Analysis",
    demo: null,
    featured: false,
  },
];

// "What I Build" focus areas. `icon` maps to a lucide-react icon name
// resolved in TechnicalFocus.jsx.
export const technicalFocus = [
  {
    icon: "Layers",
    title: "Full-Stack Applications",
    description:
      "End-to-end apps with thoughtful UIs, real data, and architecture that holds up beyond the demo.",
  },
  {
    icon: "Sparkles",
    title: "AI & Recommendation Systems",
    description:
      "Intent parsing, recommendation logic, explainability, and forecasting that help users decide.",
  },
  {
    icon: "Gamepad2",
    title: "Game Development",
    description:
      "Unity gameplay, mechanics, shaders, and multiplayer networking that feel good to play.",
  },
  {
    icon: "BarChart3",
    title: "Data Science & Visualization",
    description:
      "Turning messy datasets into dashboards and visuals that surface the story in the numbers.",
  },
  {
    icon: "Database",
    title: "Database Systems",
    description:
      "Relational design, SQL, and schema modeling built for correctness and query performance.",
  },
  {
    icon: "Network",
    title: "Client-Server Software",
    description:
      "Networked applications with real-time communication, state sync, and clean protocols.",
  },
];

export const education = {
  school: "University of Illinois Chicago",
  degree: "BS in Computer Science",
  gpa: "3.86",
  honors: ["Magna Cum Laude", "Dean's List — 4 Years (Every Semester)"],
  coursework: [
    "Database Systems",
    "Introduction to Data Science",
    "Video Game Design",
    "Object-Oriented Languages & Environments",
    "Computer Algorithms",
    "Systems Programming",
    "Software Engineering",
    "User Interface Design",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: [
      "Java",
      "Python",
      "C",
      "C++",
      "C#",
      "Scala",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "Unity",
      "JavaFX",
      "Git",
      "Chrome Extensions",
      "REST APIs",
      "Arduino",
      "MATLAB",
    ],
  },
  {
    category: "Areas",
    items: [
      "Software Engineering",
      "Full-Stack Development",
      "AI Tools",
      "Recommendation Systems",
      "Data Visualization",
      "Database Design",
      "Game Development",
      "Client-Server Architecture",
    ],
  },
];

// Ordered nav. `num` drives the "01." style markers.
export const sections = [
  { id: "about", num: "01", label: "About" },
  { id: "projects", num: "02", label: "Projects" },
  { id: "focus", num: "03", label: "What I Build" },
  { id: "education", num: "04", label: "Education" },
  { id: "skills", num: "05", label: "Skills" },
  { id: "contact", num: "06", label: "Contact" },
];
