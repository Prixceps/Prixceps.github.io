import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";

export const personalInfo = {
  name: "Prince Raj",
  role: "AI/ML Software Engineer",
  email: "Prrj2026@gmail.com",
  phone: "+91-6201044405",
  linkedin: "https://www.linkedin.com/in/prixceps/",
  github: "https://github.com/Prixceps",
  instagram: "https://www.instagram.com/prixceps_._/",
  about: "I am a driven AI/ML Software Engineer with a strong foundation in building intelligent applications and scalable web solutions. I specialize in leveraging machine learning, NLP, and modern frameworks to create impactful digital products. From AI-powered educational tools to speech processing pipelines, I am passionate about turning complex problems into elegant, user-centric solutions.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prixceps/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/Prixceps",
      icon: Github,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/prixceps_._/",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:Prrj2026@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      url: "tel:+916201044405",
      icon: Phone,
    },
  ],
};

export const skills = {
  languages: ["Python", "C/C++", "SQL"],
  frameworks: ["Django", "React"],
  tools: ["Git", "GitHub", "VS Code", "Visual Studio", "AWS", "Oracle Cloud"],
  libraries: ["Pandas", "NumPy"],
  concepts: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
};

export const projects = [
  {
    title: "EdTech AI Assignment Generator",
    period: "Jan'25 – Apr'25",
    description: "An AI-driven educational platform generating tiered assignments from YouTube lectures.",
    points: [
      "Built an AI-driven educational platform that generates tiered assignments (Easy to Advanced) from YouTube lectures, enhancing content comprehension and self-assessment.",
      "Analysed over 120+ minutes of lecture content, generating 600+ exam-style questions across various formats (MCQ, Subjective, Matching).",
    ],
    techStack: ["Python", "Django", "React", "Transformers"],
  },
  {
    title: "Speech-to-Text Summarization App",
    period: "Nov'25 – Apr'26",
    description: "An end-to-end speech processing application with NLP summarization.",
    points: [
      "Developed an end-to-end speech processing application converting audio to text using OpenAI Whisper with ~95% transcription accuracy across diverse audio inputs.",
      "Implemented NLP-based text summarization pipeline reducing transcript length by 60–70% while preserving key information using extractive and abstractive techniques.",
      "Built an interactive Streamlit interface supporting real-time audio upload, processing, and summary generation with average response latency under 2 seconds.",
    ],
    techStack: ["Python", "Streamlit", "OpenAI Whisper", "NLP"],
  },
];

export const certificates = [];

export const education = [];

export const achievements = [];
