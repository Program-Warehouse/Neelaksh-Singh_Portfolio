// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Neelaksh",
  middleName: "",
  lastName: "Singh",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Neelaksh-Singh",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/neelaksh.singh.16/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/neelaksh-singh-89265a197/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/person.png"),
  imageSize: 375,
  message:
    "I am currently a 2nd Year CSE undergrad at BIT, Mesra. I love working as well as knowing about various technologies which are currently empowering our world. I have knowledge of DevOps, MERN development , Cloud and Machine Learning.  I have passion for Football and like playing golf as well.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Neelaksh-Singh", 
  reposLength: 4,
  specificRepos: ["DOCK-IT", "Note-taker", "KBC_Game_in_CPP"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/person.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/person.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "C/C++", value: 50 },
    { name: "MERN", value: 25 },
    { name: "Docker", value: 40 },
    { name: "Kubernetes", value: 60 },
    { name: "Ansible", value: 55 },
  ],
  softSkills: [
    { name: "skill", value: 65 },
    { name: "skill", value: 80 },
    { name: "skill", value: 75 },
    { name: "skill", value: 45 },
    { name: "skill", value: 40 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am currently a 2nd Year CSE undergrad at BIT, Mesra. I love working as well as knowing about various technologies which are currently empowering our world. I have knowledge of DevOps, MERN development , Cloud and Machine Learning.  I have passion for Football and like playing golf as well.",
  email: " neelaksh48@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
