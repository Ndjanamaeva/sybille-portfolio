export const personalInfo = {
  name: "NDJANA EBOGO SYBILLE MAEVA",
  email: "ndjanaebogosybille@gmail.com",
  phone: "+237691001755",
  location: {
    en: "Yaounde, Cameroon",
    fr: "Yaoundé, Cameroun"
  },
  github: "https://github.com/Ndjanamaeva",
  linkedin: "https://www.linkedin.com/in/sybille-maeva-ndjana-ebogo-a44042322/",
  figma: "https://www.figma.com/files/team/1351896971819028182/project/215999673/Team-project?fuid=1351896969300284744",
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
    { name: "Vue.js", level: 75 },
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
    { name: "Network & Security Basics", level: 70 },
    { name: "English Proficiency", level: 95 }
  ]
};

export const education = [
  {
    degree: "BSc Software Engineering",
    institution: "The ICT University",
    location: {
      en: "Yaounde, Cameroon",
      fr: "Yaoundé, Cameroun"
    },
    period: "2021 - 2025",
    description: {
      en: "Specialized in software development, UI/UX design, and digital solutions",
      fr: "Spécialisée en développement logiciel, design UI/UX et solutions numériques"
    }
  },
  {
    degree: "GCE A-Level Sciences",
    institution: "Queensway International College",
    location: {
      en: "Yaounde, Cameroon",
      fr: "Yaoundé, Cameroun"
    },
    period: "2016 - 2018",
    description: {
      en: "Focus on sciences and technology",
      fr: "Accent sur les sciences et la technologie"
    }
  },
  {
    degree: "GCE O-Level Sciences",
    institution: "Queensway International College",
    location: {
      en: "Yaounde, Cameroon",
      fr: "Yaoundé, Cameroun"
    },
    period: "2011 - 2016",
    description: {
      en: "Foundation in sciences and general education",
      fr: "Fondation en sciences et éducation générale"
    }
  }
];

export const projects = [
  {
    id: "cenadi",
    title: {
      en: "CENADI Cameroon Website",
      fr: "Site Web CENADI Cameroun"
    },
    role: {
      en: "Frontend Developer & UI/UX Designer",
      fr: "Développeur Frontend & Designer UI/UX"
    },
    period: "2024",
    objective: {
      en: "Design and develop a modern, professional website for the National Center for Digitization (CENADI) to showcase their digital transformation initiatives and services",
      fr: "Concevoir et développer un site web moderne et professionnel pour le Centre National de Numérisation (CENADI) afin de présenter leurs initiatives de transformation digitale et leurs services"
    },
    actions: {
      en: [
        "Conducted user research and competitive analysis",
        "Created complete UI/UX design in Figma",
        "Developed responsive frontend with React",
        "Implemented modern animations and interactions",
        "Ensured accessibility and performance optimization"
      ],
      fr: [
        "Réalisé des recherches utilisateurs et une analyse concurrentielle",
        "Créé le design UI/UX complet dans Figma",
        "Développé le frontend responsive avec React",
        "Implémenté des animations et interactions modernes",
        "Assuré l'accessibilité et l'optimisation des performances"
      ]
    },
    results: {
      en: [
        "Delivered a premium, professional website that enhanced CENADI's digital presence",
        "Achieved 95+ Lighthouse performance score",
        "Improved user engagement with intuitive navigation",
        "Responsive design working seamlessly across all devices"
      ],
      fr: [
        "Livré un site web premium et professionnel qui a renforcé la présence digitale de CENADI",
        "Obtenu un score de performance Lighthouse de 95+",
        "Amélioré l'engagement utilisateur avec une navigation intuitive",
        "Design responsive fonctionnant parfaitement sur tous les appareils"
      ]
    },
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
    title: {
      en: "nGomna Mobile Application",
      fr: "Application Mobile nGomna"
    },
    role: {
      en: "Lead Developer & UI/UX Designer",
      fr: "Développeur Principal & Designer UI/UX"
    },
    period: "2023",
    objective: {
      en: "Develop an innovative mobile application to connect users with local services and resources in Cameroon",
      fr: "Développer une application mobile innovante pour connecter les utilisateurs aux services et ressources locaux au Cameroun"
    },
    actions: {
      en: [
        "Led the complete design and development process",
        "Created user-centered UI/UX design with Figma",
        "Built cross-platform mobile app with Flutter",
        "Implemented real-time features and geolocation",
        "Conducted user testing and iterative improvements"
      ],
      fr: [
        "Dirigé le processus complet de conception et de développement",
        "Créé un design UI/UX centré sur l'utilisateur avec Figma",
        "Construit une application mobile multiplateforme avec Flutter",
        "Implémenté des fonctionnalités en temps réel et la géolocalisation",
        "Réalisé des tests utilisateurs et des améliorations itératives"
      ]
    },
    results: {
      en: [
        "Successfully launched a fully functional mobile application",
        "Delivered seamless user experience across iOS and Android",
        "Reduced service discovery time by 30% for users",
        "Achieved 92% positive user feedback in testing"
      ],
      fr: [
        "Lancé avec succès une application mobile entièrement fonctionnelle",
        "Offert une expérience utilisateur fluide sur iOS et Android",
        "Réduit le temps de découverte des services de 30% pour les utilisateurs",
        "Obtenu 92% de retours utilisateurs positifs lors des tests"
      ]
    },
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
    title: {
      en: "Geolocation Flutter Application",
      fr: "Application Flutter de Géolocalisation"
    },
    role: {
      en: "Mobile Developer",
      fr: "Développeur Mobile"
    },
    period: "2023",
    objective: {
      en: "Create a specialized mobile application leveraging GPS technology for location-based services",
      fr: "Créer une application mobile spécialisée utilisant la technologie GPS pour des services basés sur la localisation"
    },
    actions: {
      en: [
        "Integrated GPS and mapping APIs",
        "Developed real-time location tracking features",
        "Implemented offline capabilities",
        "Optimized battery usage and performance",
        "Created intuitive map-based interface"
      ],
      fr: [
        "Intégré les APIs GPS et de cartographie",
        "Développé des fonctionnalités de suivi de localisation en temps réel",
        "Implémenté des capacités hors ligne",
        "Optimisé l'utilisation de la batterie et les performances",
        "Créé une interface intuitive basée sur la carte"
      ]
    },
    results: {
      en: [
        "Built reliable location tracking with 95% accuracy",
        "Optimized battery consumption by 40%",
        "Enabled offline functionality for better user experience",
        "Delivered smooth performance across different devices"
      ],
      fr: [
        "Construit un suivi de localisation fiable avec 95% de précision",
        "Optimisé la consommation de batterie de 40%",
        "Activé la fonctionnalité hors ligne pour une meilleure expérience utilisateur",
        "Offert des performances fluides sur différents appareils"
      ]
    },
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
    title: {
      en: "WhatsApp Chatbot - ELOGE Bank",
      fr: "Chatbot WhatsApp - Banque ELOGE"
    },
    role: {
      en: "Chatbot Developer & Designer",
      fr: "Développeur & Designer de Chatbot"
    },
    period: "2022",
    objective: {
      en: "Automate customer service and improve response time for bank customers through an intelligent WhatsApp chatbot",
      fr: "Automatiser le service client et améliorer le temps de réponse pour les clients de la banque via un chatbot WhatsApp intelligent"
    },
    actions: {
      en: [
        "Analyzed customer service requirements and pain points",
        "Designed conversational flows and user journeys",
        "Developed automated response system",
        "Integrated with banking APIs for real-time information",
        "Tested and refined chatbot responses"
      ],
      fr: [
        "Analysé les exigences du service client et les points de friction",
        "Conçu les flux conversationnels et les parcours utilisateurs",
        "Développé le système de réponse automatisé",
        "Intégré aux APIs bancaires pour des informations en temps réel",
        "Testé et affiné les réponses du chatbot"
      ]
    },
    results: {
      en: [
        "Automated 40% of repetitive customer inquiries",
        "Reduced average response time from hours to seconds",
        "Improved customer satisfaction by providing 24/7 support",
        "Decreased support team workload significantly"
      ],
      fr: [
        "Automatisé 40% des demandes clients répétitives",
        "Réduit le temps de réponse moyen de plusieurs heures à quelques secondes",
        "Amélioré la satisfaction client en fournissant un support 24/7",
        "Diminué significativement la charge de travail de l'équipe support"
      ]
    },
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
