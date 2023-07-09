/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shashank's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shashank Karan Portfolio",
    type: "website",
    url: "https://shashankkaran.me/",
  },
};

//Home Page
const greeting = {
  title: "Shashank Karan",
  logo_name: "ShashankKaran",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/u/1/d/15-Ueog-ZftGwfJGjIt3PHIRSw8ikGHSB/view?usp=sharing&usp=embed_facebook",
  portfolio_repository: "https://github.com/shashankkaran/Portfolio",
  githubProfile: "https://github.com/shashankkaran",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/shashankkaran",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shashank-karan-21124418b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:shashankkaran41@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ShashankKaran10",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/shashank.karan.14/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shashankkaran41/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Also to contribute more and more to Open Source projects Open Source projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Server management (DevOps)",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "DevOps",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
       
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
      
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/shashank-karan/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/shashankkaran41?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shashankkaran",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/shashankkaran",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shashankkaran999",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology, Jamshedpur",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "jsrlogo.png",
      alt_name: "NIT Jamshedpur",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://nitjsr.ac.in",
    },
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "Winner of Machine Knight by CodeBrewers ",
      subtitle: "- @ unstop.com",
      logo_path: "CODREW.jpeg",
      certificate_link:
        "https://unstop.com/certificate-preview/2e34adb9-1a13-41cb-80a1-bdeb50f7569c",
      alt_name: "Codebrewers",
      color_code: "#8C151599",
    },
    {
      title: "National Semi-Finalist:Top 100 Out of 45K+",
      subtitle: "- Optum Stratethon Hackathon",
      logo_path: "optum.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1nmLHZnUWeA9zfAnLwFVSxGH8Q1sqdTKt/view?usp=sharing",
      alt_name: "optum",
      color_code: "#00000099",
    },
    {
      title: "Hack-de-Science Hackathon Winner",
      subtitle: "- ’OJJAS’ of NIT Jamshedpur - 2021",
      logo_path: "ojass.png",
      certificate_link:
        "https://drive.google.com/file/d/1mClq8Y_ea6OKm79_QzcX7gcLKfs728v8/view",
      alt_name: "Golden Eagles",
      color_code: "#0C9D5899",
    },
    {
      title: "Hackathon Winner:Flagship Event of Cultural n Tech Fest",
      subtitle: "- ’KALAASH’ of NIT Jamshedpur - 2022",
      logo_path: "kalash.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1mClq8Y_ea6OKm79_QzcX7gcLKfs728v8/view",
      alt_name: "ITUS DEV",
      color_code: "#1F70C199",
    },
    {
      title: "DL Certificate of Competency",
      subtitle: "NVidea",
      logo_path: "nvidea.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1zuqUPn0aGC4-mB05oEvlcdA101vXXBSm/view?usp=sharing",
      alt_name: "ITUS DEV",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Currently I m working as freelance developer, providing modern solutions to clients by using ML and DL. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Co-Founder",
          company: "Euphoria Freelancer Inc.",
          company_url: "https://www.euphoriafreelancer.com/",
          logo_path: "euphoria.jpeg",
          duration: "May 2019 - Currently",
          location: "Remote",
          description:
            "Our freelance company provides a range of modern solutions, including web design, web development, ML , Web Scrapping , Blockchain , Data Analysing and more . Our team consists of skilled and experienced professionals who are passionate about delivering high-quality work that exceeds our clients' expectations.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
     
        {
          title: "Full Stack Intern",
          company: "EmbedEasy Pvt. Ltd.",
          company_url: "https://www.embedeasy.com/",
          logo_path: "embedeasy.png",
          duration: "Jan 2021 - Mar 2021",
          location: "Remote",
          description:
            "- Developed quality software and web application using ReactJs .Build reusable and scalable React component from scratch along with Admin Portal",
          color: "#ee3c26",
        },
        {
          title: "AMAZON ML SUMMER SCHOOL",
          company: "Amazon",
          company_url: "https://amazon.in/",
          logo_path: "amazon.png",
          duration: "May 2022 - July 2022",
          location: "Work From Home",
          description:
            "- Attended Amazon ML Summer School 2022 Training Program.",
          color: "#181717",
        },
       
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
       
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
        {
          title: "Management Head Official Webteam",
          company: "NIT Jamshedpur",
          company_url: "https://nitjsr.ac.in/",
          logo_path: "jsrlogo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "Currently converting it to NEXTJS",
          color: "#181717",
        },
        {
          title: "Conducted Workshops",
          company: "Programming Club of NIT Jamshedpur",
          company_url: "http://archive.nitjsr.ac.in/sw/student_activities/pcon.php/",
          logo_path: "pcon.jpeg",
          duration: "July 2022 - PRESENT",
          location: "Jamshedpur",
          description:
            "Active Member of Web Development Wing",
          color: "#181717",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shashank.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.euphoriafreelancer.com/blog/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Karan Villa , Dhaiya , Dhanbad , Jharkhand - 826004",
    locality: "Dhanbad",
    country: "IN",
    region: "Jharkhand",
    postalCode: "826004",
    streetAddress: "Bhelatand Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/8kmpRo9Sz3JDZy1d7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
