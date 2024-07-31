import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const projects = [
    {
      title: "Ecommerce Application",
      description: "Build a Ecommerce application using Redux and  ",
      toolsUsed: ["Node.js", "Express", "MongoDB", "React", "Redux"],
      image: "https://i.postimg.cc/SQT5XPs3/Ecommerce1.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/ecommerce-frontend-mainn",
      liveDemo: "http://marcus-guvi.s3-website.ap-south-1.amazonaws.com/",
      type: "fullstack",
    },
    {
      title: "Chat Application",
      description: "Build a chat applications using Socket.IO for instant messaging.Users can create accounts, join chat rooms, and send messages to other users in real-time with your Fav Emoji",
      toolsUsed: ["Node.js", "Express", "MongoDB", "React", "Socket.IO"],
      image: "https://i.postimg.cc/SQT5XPs3/Ecommerce1.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/chat-application",
      liveDemo: "http://marcus-guvi.s3-website.ap-south-1.amazonaws.com/",
      type: "fullstack",
    },
    {
      title: "Notes Application",
      description: "Develop a notes application where users can create, edit, and delete notes. Implement user authentication to allow users to securely manage their notes. ",
      toolsUsed: ["Node.js", "Express", "MongoDB", "React"],
      image: "https://i.postimg.cc/wx0vHTk6/Notes2.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/note-app-fe",
      liveDemo: "https://eclectic-alfajores-b579fa.netlify.app/",
      type: "fullstack",
    },
    {
      title: "Resume Builder",
      description: "Create and customize professional resumes effortlessly with a feature-rich resume builder. Tailor your resume to stand out with various templates and styling options.",
      toolsUsed: ["Node.js", "Express", "MongoDB", "React", "Redux"],
      image: "https://i.postimg.cc/WbFSK1cH/ResumeB.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/Resume-Builder-FE",
      liveDemo: "https://euphonious-moonbeam-7d3b46.netlify.app/",
      type: "fullstack",
    },
    {
      title: "Rest Countries Weather",
      description:
        "Discover detailed information about countries and regions around the world. This interactive explorer, developed with DOM , Node.js and powered by the REST Countries API, allows users to explore diverse geographical and cultural data.",
      toolsUsed: ["DOM", "Node.js", "REST Countries API"],
      image: "https://i.postimg.cc/tgQ3tybD/Weather-information.png",
      sourceCode: "https://github.com/MarcusMathuram46/Task/tree/main/Day17",
      liveDemo: "https://idyllic-empanada-5329ab.netlify.app/day17/",
      type: "miniproject",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Play the classic Tic Tac Toe game with a simple and intuitive user interface. Enjoy a two-player game with alternating turns and responsive design.",
      toolsUsed: ["React"],
      image: "https://i.postimg.cc/pLd42x70/Tic-Tac-Toe.png",
      sourceCode: "https://github.com/MarcusMathuram46/tic-tac-toe",
      liveDemo: "https://tic-tac-toe-marcus.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Dictionary App",
      description:
        "Expand your vocabulary with a comprehensive Dictionary App. Look up word meanings and definitions effortlessly. Developed using DOM, Node.js and integrated with the Dictionary API for accurate and rich word data.",
      toolsUsed: ["DOM", "Node.js", "Dictionary API"],
      image: "https://i.postimg.cc/BnwXgS5F/Dictionary.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/Task/tree/main/Day20/Task2",
      liveDemo:
        "https://regal-dieffenbachia-b759ba.netlify.app/day20/task2/index.html",
      type: "miniproject",
    },
    {
      title: "Country Information App ",
      description:
        "Discover essential information about countries around the world with our comprehensive Country Information App. From population statistics to capital cities, regions, and sub-regions, explore the diversity of our planet at your fingertips. Stay informed and broaden your understanding of the world's nations with ease.",
      toolsUsed: ["DOM", "Node.js", "OpenCountriesMap API"],
      image: "https://i.postimg.cc/3rcmWXNX/Country-Info-App.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/Task/tree/main/Day20/Task3",
      liveDemo:
        "https://regal-dieffenbachia-b759ba.netlify.app/day20/task3/index.html",
      type: "miniproject",
    },
    {
      title: "Weather App",
      description:
        "Stay informed about real-time weather conditions worldwide. The Weather App, powered by React and the OpenWeatherMap API, provides accurate weather data and an intuitive user interface for easy exploration.",
      toolsUsed: ["DOM", "Node.js", "OpenWeatherMap API"],
      image: "https://i.postimg.cc/x8rpSWwC/Weather.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/Task/tree/main/Day20/Task4",
      liveDemo:
        "https://regal-dieffenbachia-b759ba.netlify.app/day20/task4/index.html",
      type: "miniproject",
    },
    {
      title: "My Todo App",
      description:
        "Efficiently manage your tasks with a user-friendly to-do list application. Built using React , Bootstrap and useStates for data persistence, this app offers a seamless and organized task management experience.",
      toolsUsed: ["React", "Bootstrap", "useStates"],
      image: "https://i.postimg.cc/gkGZKJq9/Todo.png",
      sourceCode: "https://github.com/MarcusMathuram46/react-todo-task",
      liveDemo: "https://super-begonia-efd4b6.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Price Card Generator",
      description:
        "Effortlessly create stylish and customizable price cards for your products or services. This generator, developed using React, Redux, and Node.js, allows for real-time preview and customization.",
      toolsUsed: ["React", "Redux", "Node.js"],
      image: "https://i.postimg.cc/9XDKCFy5/price-card.png",
      sourceCode: "https://github.com/MarcusMathuram46/react-useContext-task",
      liveDemo: "https://visionary-creponne-f9ed83.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Shopping Cart",
      description:
        "Build a robust online shopping cart for your business. This full-featured cart, developed with React, Node.js and Bootstrap offers seamless product management, order processing, and user-friendly interactions.",
      toolsUsed: ["React", "Node.js", "Bootstrap"],
      image: "https://i.postimg.cc/7Y02v06C/shopping-cart.png",
      sourceCode: "https://github.com/MarcusMathuram46/react_shopping_cart_task",
      liveDemo: "https://gorgeous-sawine-e35591.netlify.app/",
      type: "miniproject",
    },
    {
      title: "Calculator App",
      description:
        "Experience the simplicity and power of a feature-rich calculator app. This application, developed with DOM and JavaScript, provides both basic and advanced mathematical functions for a versatile user experience.",
      toolsUsed: ["DOM", "HTML", "CSS", "JavaScript"],
      image: "https://i.postimg.cc/y8t6VYND/calculator.png",
      sourceCode:
        "https://github.com/MarcusMathuram46/Task/tree/main/Day20/Task5",
      liveDemo:
        "https://regal-dieffenbachia-b759ba.netlify.app/day20/task5/index.html",
      type: "miniproject",
    },
    {
      title: "CRUD App with Axios",
      description:
        "Build a simple CRUD (Create, Read, Update, Delete) application using React and Axios. Perform operations on items with a React Router backend.",
      toolsUsed: ["React", "Axios", "React Router"],
      image: "https://i.postimg.cc/2yz8PbXW/crud.png",
      sourceCode: "https://github.com/MarcusMathuram46/react-axios-task",
      liveDemo: "https://charming-capybara-ef74f5.netlify.app/",
      type: "miniproject",
    },
  ];

  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
