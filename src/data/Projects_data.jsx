const Projects_data = [
  {
    id: 1,
    title: "E-Library",
    description: "Designed and developed an engaging e-library platform with an aesthetically pleasing user interface. Implemented features for browsing books and managing digital collections.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    features: [
      "User-friendly interface for book browsing",
      "Digital collection management",
      "Responsive design"
    ],
    category: "Web Development"
  },
  {
    id: 2,
    title: "Tourist Management System",
    description: "Designed and implemented a comprehensive tourist management website featuring hotel listings and detailed information about popular destinations.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API", "MySQL"],
    features: [
      "Hotel listings with details",
      "Destination information",
      "User-friendly navigation"
    ],
    category: "Web Development"
  },
  {
    id: 3,
    title: "Attendance System with Emotion Recognition",
    description: "Developed a face detection-based attendance system using DeepFace for real-time face recognition and a Tkinter-based GUI. The system integrates with MySQL to store user details, manage attendance records, and generate reports.",
    technologies: ["Python", "DeepFace", "Tkinter", "MySQL"],
    features: [
      "Real-time face recognition",
      "Secure admin login",
      "User registration and management",
      "Attendance tracking and reporting",
      "Scalable database design"
    ],
    category: "Machine Learning/Desktop Application"
  },
  {
    id: 4,
    title: "PicServe – Photography Event Platform",
    description: "Built a photo-sharing platform where photographers can upload event photos and users can view, like, share, and download them. Photos are auto-expired after 24 hours to ensure freshness and privacy. The frontend is built with React.js and the backend is powered by FastAPI with asynchronous database handling using aiomysql.",
    technologies: ["React.js", "FastAPI", "aiomysql", "Tailwind CSS", "MySQL"],
    features: [
      "Photographer profile and photo uploads",
      "Public gallery with like, share, and download options",
      "Auto-deletion of photos after 24 hours",
      "Responsive UI with Tailwind CSS",
      "Asynchronous backend with FastAPI and aiomysql"
    ],
    category: "Full Stack/Web Application"
  }

];

export default Projects_data;