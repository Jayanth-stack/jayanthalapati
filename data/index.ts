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
      title: "BeyondPasswords:Secure Online Banking Systems",
      des: "Developed a secure Flask backend with MySQL for authentication, transaction processing, and integrated Twilio for two-factor authentication, highlighting backend development and RESTful API design skills",
      img: "/p1.svg",
      iconLists: ["/auth-icon.svg", "/database-icon.svg", "/ts.svg", "/three.svg", "/security-icon.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 2,
      title: "Using TinyML concepts to Alert Cyclists",
      des: "Designed and deployed a CNN for cyclist safety with 98.9% accuracy on a microcontroller using TensorFlow Lite, showcasing expertise in machine learning and edge computing",
      img: "/p5.svg",
      iconLists: ["/ml-icon.svg", "/edge-computing-icon.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
      id: 3,
      title: "TrackIt Course Instructor Dashboard",
      des: "A Real Dashboard to track and record of Course instructors at infosys using Springboot and Angular ",
      img: "/p7.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Jayanth-stack?tab=repositories",
    },
    {
        id: 5,
        title: "Task Management Application",
        des: "A full Stack Springboot Application under works, which is aimed at task management for user, Using Angular as the frontend framework for this project",
        img: "/p8.svg",
        link: "https://github.com/Jayanth-stack?tab=repositories",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg","/database-icon.svg","/auth-icon.svg","/security-icon.svg"],
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