export const portfolioData = {
  name: "Nouman Arif",
  title: "Full-Stack Developer",
  subtitle: "AI & Data | WordPress | Content",
  tagline: "Results-driven CS undergrad building end-to-end solutions across full-stack web, AI systems, WordPress, and digital content.",
  email: "noumanarif501@gmail.com",
  phone: "+92 341 6566535",
  github: "https://github.com/Nomix95",
  location: "Daska, Punjab, Pakistan",
  availability: "Open to remote roles, internships & on-site positions. Willing to relocate.",

  about: {
    summary: "Results-driven Computer Science undergraduate (BSCS, 6th Semester, CGPA 3.49/4.00) at UET Gujranwala with proven experience across full-stack web development, AI-powered systems, WordPress development, video production, and digital content creation. Delivers end-to-end solutions — from LLM pipelines and cross-platform apps to WooCommerce stores, SEO copy, and branded video assets. Combines strong engineering fundamentals with creative execution across multiple media formats."
  },

  skills: {
    technical: [
      { category: "Backend", items: ["Python / Flask / FastAPI", "Node.js / Express.js", "PHP / WordPress / WooCommerce", "C# / .NET / WinForms"] },
      { category: "Frontend", items: ["JavaScript / React / Next.js", "HTML5 / CSS3 / Tailwind", "React Three Fiber"] },
      { category: "Data & AI", items: ["LLM APIs / RAG / LangChain", "NLP / Sentiment Analysis", "CNN / Deep Learning (PyTorch)", "Google Gemini API"] },
      { category: "Databases", items: ["SQL / Oracle / MySQL", "MongoDB / Firebase"] },
      { category: "Other", items: ["Java / Android Dev", "Blockchain / Solidity", "REST APIs / Git / GitHub", "Docker / MPI"] }
    ],
    design: ["Adobe Premiere Pro", "Adobe Illustrator", "CapCut / After Effects", "Canva", "SEO Copywriting", "Blog & Ad Copywriting", "Social Media Strategy"],
    soft: ["Problem-Solving", "Team Collaboration", "Research & Analysis", "Teaching & Mentoring", "Recruitment Operations", "Communication"],
    languages: [
      { language: "Urdu", level: "Native" },
      { language: "English", level: "Professional Working" }
    ]
  },

  education: [
    {
      degree: "BS Computer Science (BSCS)",
      institution: "University of Engineering & Technology, Gujranwala",
      period: "2023 – Present",
      details: "6th Semester | CGPA: 3.49 / 4.00"
    },
    {
      degree: "FSc Pre-Medical with Additional Mathematics",
      institution: "Superior College",
      period: "2020 – 2022",
      details: "Result: Distinction"
    },
    {
      degree: "Matriculation — Science",
      institution: "Watan Ideal High School, Mitranwali, Punjab",
      period: "2018 – 2020",
      details: "Result: Distinction"
    }
  ],

  experience: [
    {
      role: "Graphic Design, Video Editing & Recruitment Intern",
      company: "Cure IT Solutions",
      period: "Jun 2025 – Present",
      location: "Lahore",
      highlights: [
        "Planned, edited, and delivered short-form and long-form video content using Adobe Premiere Pro and CapCut — incorporating motion graphics, transitions, and voiceover synchronization for social media campaigns and client brand videos.",
        "Designed social media creatives, promotional reels, and brand identity assets using Adobe Illustrator and Canva, maintaining visual consistency across all digital platforms.",
        "Wrote and published SEO-optimized content for LinkedIn, Instagram, and the company blog, contributing to measurable growth in organic reach and audience engagement.",
        "Managed end-to-end recruitment operations covering talent sourcing, CV screening, interview scheduling, ATS database management, and weekly reporting across APAC and European staffing pipelines."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Arch Technologies",
      period: "Jun 2026 – Jul 2026",
      location: "Remote",
      highlights: [
        "Developed responsive front-end features and integrated REST API endpoints to support dynamic, data-driven web functionality across client-facing products.",
        "Deployed performance-optimized landing pages achieving strong Lighthouse scores across speed, accessibility, and SEO metrics.",
        "Participated in Agile sprint cycles, contributing to planning sessions, peer code reviews, and release documentation."
      ]
    },
    {
      role: "Private Science & Computing Tutor",
      company: "Self-Employed",
      period: "May 2024 – Present",
      location: "Daska",
      highlights: [
        "Delivered personalized lessons across science and computer science curricula, designing structured study plans, visual guides, and custom practice sets."
      ]
    }
  ],

  projects: [
    {
      id: "trash-co",
      name: "Trash-CO — AI Waste Classification System",
      description: "A deep learning ensemble classifier for waste management with contextual recycling guidance via LLM integration.",
      tags: ["Python", "CNN/ResNet50/MobileNetV2", "Google Gemini API", "React", "Machine Learning"],
      highlights: [
        "Engineered a deep learning ensemble (MobileNetV2 + ResNet50) trained on TrashNet to classify waste into six recyclable categories with high inference accuracy.",
        "Integrated Google Gemini LLM to deliver contextual recycling guidance in natural language.",
        "Built a React frontend with real-time inference output."
      ],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: "tutorsphere",
      name: "TutorSphere — AI-Driven Tutoring & Compute Marketplace",
      description: "Multi-module platform with reverse-auction academic marketplace, RL-based adaptive tutor, and distributed compute marketplace.",
      tags: ["FastAPI", "React", "Reinforcement Learning", "A*", "Docker", "LLM APIs"],
      highlights: [
        "Architected a multi-module platform: reverse-auction Academic Marketplace, RL-based adaptive tutor with A* knowledge graph traversal, Collaborative Study Rooms, and a Docker-based Distributed Compute Marketplace with TutorCredits economy.",
        "Authored a 30+ page technical proposal covering API contracts, data models, user flows, and monetization strategy."
      ],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: "parallel-warfare",
      name: "Parallel Warfare — Real-Time 3D Multiplayer Game",
      description: "Browser-based 3D multiplayer game with React Three Fiber frontend and MPI-based C performance benchmarking.",
      tags: ["React Three Fiber", "Node.js", "Socket.IO", "C", "MPI", "WebGL"],
      highlights: [
        "Built a browser-based 3D multiplayer game with a React Three Fiber frontend and Node.js/Socket.IO backend.",
        "Integrated MPI-based C modules to benchmark concurrent workload performance."
      ],
      github: "https://github.com/Nomix95/Parallel-Warfare",
      demo: "#",
      featured: true
    },
    {
      id: "zestcart",
      name: "ZestCart — Multi-Vendor eCommerce Store",
      description: "Full-featured WooCommerce store with variable pricing, coupon management, and optimized performance.",
      tags: ["WordPress", "WooCommerce", "PHP", "Elementor Pro", "MySQL"],
      highlights: [
        "Built a full-featured WooCommerce store with variable pricing, coupon management, and automated order emails.",
        "Wrote custom PHP snippets to extend functionality without modifying core plugin files.",
        "Optimized Elementor Pro page layouts for fast load times using image compression and caching plugin configuration."
      ],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: "medinfo",
      name: "MedInfo — Healthcare Services Business Website",
      description: "Multi-page healthcare site with services directory, doctor profiles, appointment forms, and resource blog.",
      tags: ["WordPress", "WPBakery", "Yoast SEO", "Custom CSS"],
      highlights: [
        "Developed a multi-page healthcare site with services directory, doctor profiles, appointment forms, and a resource blog.",
        "Configured Yoast SEO schema markup for improved search visibility."
      ],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: "hospital-banking",
      name: "Hospital & Bank Management Systems",
      description: "Comprehensive desktop applications for healthcare and banking operations with Oracle databases.",
      tags: ["C#", ".NET Framework", "Oracle Database", "WinForms", "Database Design"],
      highlights: [
        "Designed two comprehensive desktop applications for patient/appointment/billing management and core banking operations.",
        "Built on normalized Oracle schemas with role-based access control and WinForms UIs."
      ],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: "voting-system",
      name: "Online Voting System with Facial Recognition",
      description: "Full-stack voting platform with live tracking and Python/OpenCV facial recognition for identity verification.",
      tags: ["PHP", "Python", "MySQL", "OpenCV", "Computer Vision"],
      highlights: [
        "Built a full-stack voting platform with live vote tracking.",
        "Integrated Python/OpenCV facial recognition layer to prevent duplicate voting and strengthen identity verification."
      ],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: "simulatrix",
      name: "Simulatrix — OS Concepts Simulation Platform",
      description: "Interactive visualization tool for CPU scheduling, memory management, deadlock detection, and file systems.",
      tags: ["C", "React.js", "Operating Systems", "Educational"],
      highlights: [
        "Created an interactive web tool visualizing CPU scheduling (FCFS, SJF, Round Robin), memory management, deadlock detection, and file system operations.",
        "Built with a C backend and React frontend."
      ],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      id: "mood-detector",
      name: "Mood Detector Chatbot",
      description: "AI chatbot classifying emotional tone using NLP pipelines and pre-trained LLM embeddings.",
      tags: ["Python", "NLP", "VADER Sentiment Analysis", "LLMs", "AI"],
      highlights: [
        "Built an AI chatbot classifying emotional tone using NLP pipelines and VADER scoring.",
        "Integrated pre-trained LLM embeddings to improve nuanced classification accuracy."
      ],
      github: "#",
      demo: "#",
      featured: false
    }
  ]
};
