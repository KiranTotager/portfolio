const projects = [
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
      title: "JWT Auth API (Internship Project at L&T PES)",
      description:
        "Built a secure authentication backend for internal tools at L&T using FastAPI and JWT. Users receive session-specific tokens upon login, which are then verified across protected API routes. Also built token/session verification utilities for reuse across services. Integrated aiomysql for efficient async MySQL queries, reducing query lag by 35%. Focused on secure and scalable API design, ensuring tokens expire after session end and can’t be reused.",
      technologies: ["FastAPI", "Python", "JWT", "MySQL", "aiomysql"],
      github: null,
    }
  ];
  
  export default projects;