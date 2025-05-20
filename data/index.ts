import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently in works of building a Full-Stack Trading application",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "BeyondPasswords: Secure Online Banking System",
      des: "Engineered a robust online banking platform using Flask and MySQL, implementing secure authentication, transaction processing, and two-factor authentication with Twilio. Demonstrates expertise in backend development, RESTful API design, and cybersecurity best practices.",
      img: "/p1.svg",
      iconLists: ["/flask-icon.svg", "/mysql-icon.svg", "/rest-api-icon.svg", "/twilio-icon.svg", "/security-icon.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 2,
      title: "Trading Application using Gemini & CoinAPI",
      des: "Developed a crypto trading application utilizing Gemini and CoinAPI, with real-time data fetching and trade execution capabilities. Showcases API integration, data-driven UI components, and real-time financial tech handling.",
      img: "/p5.svg",
      iconLists: ["/api-icon.svg", "/crypto-icon.svg", "/node-icon.svg", "/chart-icon.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 3,
      title: "Scalable RAG Application (Instructor Dashboard)",
      des: "Built a real-time instructor dashboard system at Infosys using Spring Boot and Angular, enabling efficient monitoring, recording, and management of course instructors. Highlights include full-stack development and scalable architecture.",
      img: "/p7.svg",
      iconLists: ["/spring-icon.svg", "/angular-icon.svg", "/java-icon.svg", "/database-icon.svg", "/dashboard-icon.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 4,
      title: "Animated Apple iPhone 3D Website",
      des: "Reimagined the Apple iPhone 15 Pro webpage with immersive 3D visuals using Three.js and fluid GSAP animations. Demonstrates creative frontend engineering and advanced web animations.",
      img: "/p4.svg",
      iconLists: ["/nextjs-icon.svg", "/three.svg", "/gsap.svg", "/ts.svg", "/tail.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 5,
      title: "Task Management Application",
      des: "Designed a secure and responsive full-stack task management platform using Spring Boot and Angular. Integrates user authentication, database handling, and task tracking for productivity enhancement.",
      img: "/p8.svg",
      iconLists: ["/spring-icon.svg", "/angular-icon.svg", "/ts.svg", "/auth-icon.svg", "/security-icon.svg", "/database-icon.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
  ];
  
  
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Senior Systems Engineer",
      desc: "Had a holisitc experience towards Software development along with DevOps, allowing me to have a clearer picture as to how to design and deploy my software.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Software Internship",
      desc: "Designed and Developed a Full stack application for the company and helped in their code review and analysis.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Industrial Internship",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Working on Personal Projects",
      desc: "Avid interest towards developing personal projects and inquisitive enough to learn new technologies.",
      className: "md:col-span-2", 
      thumbnail: "/exp4.svg",
    },
  
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/AJayanth007",
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/jayanth-alapati-6b9123167/",
    },
  ];