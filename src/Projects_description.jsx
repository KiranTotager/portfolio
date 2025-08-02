const Projects_description = [
  {
    id: 1,
    title: "Attendance System with Emotion Recognition",
    description:
      "A robust desktop application that uses real-time facial recognition and emotion detection to automate attendance. Built using Python and DeepFace for image recognition, the system also classifies emotional states like 'Happy', 'Sad', etc., with over 90% accuracy. Integrated with MySQL for secure attendance storage, with separate tables per day and role-based access to ensure admin control. Frontend handled with Tkinter for a clean UI experience.",
    technologies: ["Python", "DeepFace", "Tkinter", "MySQL"],
    github: "https://github.com/KiranTotager/face_with_emotion_detection",
  },
  {
    id: 2,
    title: "E-Library Platform",
    description:
      "A responsive web application that functions as a digital library, enabling users to browse, search, and categorize books seamlessly. Designed with HTML, CSS, and enhanced with Tailwind CSS for better UI/UX interaction. Implemented JavaScript-based dynamic filtering and a clean layout that supports both desktop and mobile views. Includes features like user account management, categorization by genre, and book previews.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/KiranTotager/e-library",
  },
  {
    id: 3,
    title: "SPIC_NMS (Role-Based Access API, Internship Project at L&T PES)",
    description:
      "Designed and developed a role-based access control system using FastAPI and JWT for internal tools at L&T. Each user role (e.g., Admin, User) is assigned specific permissions, and session-based JWT tokens enforce access rights across all API endpoints. Implemented session validation utilities to ensure tokens are valid, and scoped to the user's role. Integrated aiomysql for async database operations, enhancing query performance by 35%. The system supports scalable, secure, and modular access control.",
    technologies: ["FastAPI", "Python", "JWT", "MySQL", "aiomysql"],
    github: null,
  },
  {
    id: 4,
    title: "PicServe – Photography Event Platform",
    description:
      "A full-stack photo-sharing platform that allows photographers to upload event photos while users can view, like, share, and download them. Photos are automatically deleted after 24 hours to maintain privacy and event freshness. The project uses a responsive React.js frontend styled with Tailwind CSS, and a FastAPI backend with asynchronous MySQL operations using aiomysql.",
    technologies: ["React.js", "FastAPI", "aiomysql", "Tailwind CSS", "MySQL"],
    github: "https://github.com/KiranTotager/PicServe"  
  }


];

export default Projects_description;