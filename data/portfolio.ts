export const personalInfo = {
  name: "Sybille Ndjana Ebogo Maeva",
  email: "sybillemaeva@example.com",
  phone: "+237 XXX XXX XXX",
  location: "Yaoundé, Cameroon",
  github: "https://github.com/sybillemaeva",
  linkedin: "https://linkedin.com/in/sybillemaeva",
  figma: "https://www.figma.com/@sybillemaeva",
  availability: "available",
  responseTime: "24-48h"
};

export const skills = {
  uiux: [
    { name: "Web Design", level: 80 },
    { name: "Mobile Design", level: 90 },
    { name: "Figma", level: 100 }
  ],
  frontend: [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 80 },
    { name: "HTML/CSS", level: 90 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "REST APIs", level: 80 },
    { name: "Python", level: 75 }
  ],
  mobile: [
    { name: "Flutter", level: 85 },
    { name: "React Native", level: 70 }
  ],
  database: [
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 75 }
  ],
  other: [
    { name: "Git & Version Control", level: 85 },
    { name: "Project Management", level: 80 },
    { name: "Software Support", level: 90 },
    { name: "Network & Security Basics", level: 70 }
  ]
};

export const education = [
  {
    degree: "BSc Software Engineering",
    institution: "The ICT University",
    location: "Yaoundé, Cameroon",
    period: "2021 - 2025",
    description: "Specialized in software development, UI/UX design, and digital solutions"
  },
  {
    degree: "GCE A-Level Sciences",
    institution: "Queensway International College",
    location: "Cameroon",
    period: "Completed",
    description: "Focus on sciences and technology"
  }
];

export const projects = [
  {
    id: "cenadi",
    title: "CENADI Cameroon Website",
    role: "Frontend Developer & UI/UX Designer",
    period: "2024",
    objective: "Design and develop a modern, professional website for the National Center for Digitization (CENADI) to showcase their digital transformation initiatives and services",
    actions: [
      "Conducted user research and competitive analysis",
      "Created complete UI/UX design in Figma",
      "Developed responsive frontend with React",
      "Implemented modern animations and interactions",
      "Ensured accessibility and performance optimization"
    ],
    results: [
      "Delivered a premium, professional website that enhanced CENADI's digital presence",
      "Achieved 95+ Lighthouse performance score",
      "Improved user engagement with intuitive navigation",
      "Responsive design working seamlessly across all devices"
    ],
    kpis: {
      performanceScore: 95,
      deviceCompatibility: "100%",
      userSatisfaction: "90%"
    },
    technologies: ["React", "JavaScript", "Tailwind CSS", "Figma"],
    links: {
      demo: "https://cenadi.cm",
      github: undefined
    }
  },
  {
    id: "ngomna",
    title: "nGomna Mobile Application",
    role: "Lead Developer & UI/UX Designer",
    period: "2023",
    objective: "Develop an innovative mobile application to connect users with local services and resources in Cameroon",
    actions: [
      "Led the complete design and development process",
      "Created user-centered UI/UX design with Figma",
      "Built cross-platform mobile app with Flutter",
      "Implemented real-time features and geolocation",
      "Conducted user testing and iterative improvements"
    ],
    results: [
      "Successfully launched a fully functional mobile application",
      "Delivered seamless user experience across iOS and Android",
      "Reduced service discovery time by 30% for users",
      "Achieved 92% positive user feedback in testing"
    ],
    kpis: {
      timeSaved: "30%",
      userFeedback: "92%",
      platforms: 2
    },
    technologies: ["Flutter", "Dart", "Figma", "Firebase"],
    links: {
      demo: undefined,
      github: undefined
    }
  },
  {
    id: "geolocation",
    title: "Geolocation Flutter Application",
    role: "Mobile Developer",
    period: "2023",
    objective: "Create a specialized mobile application leveraging GPS technology for location-based services",
    actions: [
      "Integrated GPS and mapping APIs",
      "Developed real-time location tracking features",
      "Implemented offline capabilities",
      "Optimized battery usage and performance",
      "Created intuitive map-based interface"
    ],
    results: [
      "Built reliable location tracking with 95% accuracy",
      "Optimized battery consumption by 40%",
      "Enabled offline functionality for better user experience",
      "Delivered smooth performance across different devices"
    ],
    kpis: {
      locationAccuracy: "95%",
      batteryOptimization: "40%",
      offlineCapability: true
    },
    technologies: ["Flutter", "Google Maps API", "GPS", "Dart"],
    links: {
      demo: undefined,
      github: undefined
    }
  },
  {
    id: "chatbot",
    title: "WhatsApp Chatbot - ELOGE Bank",
    role: "Chatbot Developer & Designer",
    period: "2022",
    objective: "Automate customer service and improve response time for bank customers through an intelligent WhatsApp chatbot",
    actions: [
      "Analyzed customer service requirements and pain points",
      "Designed conversational flows and user journeys",
      "Developed automated response system",
      "Integrated with banking APIs for real-time information",
      "Tested and refined chatbot responses"
    ],
    results: [
      "Automated 40% of repetitive customer inquiries",
      "Reduced average response time from hours to seconds",
      "Improved customer satisfaction by providing 24/7 support",
      "Decreased support team workload significantly"
    ],
    kpis: {
      automationRate: "40%",
      responseTime: "< 5 seconds",
      availability: "24/7",
      workloadReduction: "35%"
    },
    technologies: ["Python", "WhatsApp Business API", "Node.js", "Natural Language Processing"],
    links: {
      demo: undefined,
      github: undefined
    }
  }
];

export const globalKPIs = {
  experience: "3+",
  projectsCompleted: "18+",
  onTimeDelivery: "100%",
  userSatisfaction: "92%",
  domainsCovered: 4
};

export const services = [
  {
    id: "uiux",
    icon: "Palette",
    categories: ["Web Design", "Mobile Design", "User Research", "Prototyping"]
  },
  {
    id: "frontend",
    icon: "Code2",
    categories: ["React Development", "Responsive Design", "Performance Optimization", "Modern CSS"]
  },
  {
    id: "backend",
    icon: "Server",
    categories: ["API Development", "Database Design", "Node.js", "Python"]
  },
  {
    id: "mobile",
    icon: "Smartphone",
    categories: ["Flutter Development", "Cross-platform Apps", "iOS & Android", "App Design"]
  },
  {
    id: "prototyping",
    icon: "Figma",
    categories: ["Figma Design", "Interactive Prototypes", "Design Systems", "User Flows"]
  },
  {
    id: "digitalization",
    icon: "Zap",
    categories: ["Process Automation", "Digital Transformation", "Chatbots", "Workflow Optimization"]
  }
];

export const testimonials = [
  {
    name: "Dr. Jean-Paul Kouam",
    role: "Professor, The ICT University",
    content: {
      en: "Sybille demonstrates exceptional technical skills and a remarkable ability to deliver complex projects on time. Her attention to detail in both design and development is outstanding.",
      fr: "Sybille fait preuve de compétences techniques exceptionnelles et d'une remarquable capacité à livrer des projets complexes dans les délais. Son attention aux détails en design et en développement est remarquable."
    },
    avatar: ""
  },
  {
    name: "Marie Tchinda",
    role: "Project Manager, Digital Agency",
    content: {
      en: "Working with Sybille was a pleasure. She brings creativity and professionalism to every project, always going the extra mile to ensure client satisfaction.",
      fr: "Travailler avec Sybille a été un plaisir. Elle apporte créativité et professionnalisme à chaque projet, faisant toujours un effort supplémentaire pour assurer la satisfaction du client."
    },
    avatar: ""
  },
  {
    name: "Samuel Ndoumbe",
    role: "Tech Lead, CENADI",
    content: {
      en: "Sybille's work on our website exceeded expectations. Her technical expertise combined with strong design sensibility resulted in a website we're truly proud of.",
      fr: "Le travail de Sybille sur notre site web a dépassé nos attentes. Son expertise technique combinée à un fort sens du design a abouti à un site dont nous sommes vraiment fiers."
    },
    avatar: ""
  }
];
