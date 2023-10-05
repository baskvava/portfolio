/**
 * @about
 * custom your experience section
 */

import { AiFillLinkedin } from "react-icons/ai";

export const about = {
  position: "Frontend Engineer",
  positionDescription: "making impact web apps to the world",
  detail: (
    <>
      I&apos;m passionate about the latest front-end technologies and trends,
      and eager to learn new things. Experience on large-scale system such as
      Facebook
    </>
  ),
  highlight: {
    url: "https://www.linkedin.com/in/ying-hsuan-chen1/",
    content: "Looking for new Opportunity",
  },
  porfolioImg: {
    imgUrl: "https://avatars.githubusercontent.com/u/23297498?v=4",
    btnUrl: "https://www.linkedin.com/in/ying-hsuan-chen1/",
    actionBtn: {
      icon: <AiFillLinkedin size="1.2em" />,
      content: "Hire Me",
    },
  },
};

/**
 * @experience
 * custom your experience section
 */
export const experience = [
  {
    compnayName: "Fortinet",
    title: "Web Developer",
    time: "Jan, 2023 - Now",
    description: [
      <>
        Led a successful redesign of a React project, leveraging Redux Toolkit,
        resulting in an{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          impressive 80% reduction in development time
        </span>{" "}
        and significantly improved maintenance efficiency.
      </>,
      <>
        Drove regular code review sessions, providing actionable feedback that
        led to{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          reduction in bugs and enhanced codebase stability.
        </span>
      </>,
      <>
        <span className="underline decoration-wavy decoration-primary text-accent">
          Led a cross-functional team{" "}
        </span>
        in overhauling a legacy Angular project into a performant React
        application. Integrated Webpack, Prettier, ESLint, and StyleLint,
        resulting in reduction in bundle size and improvement in initial load
        times.
      </>,
    ],
  },
  {
    compnayName: "Meta (Facebook)",
    title: "Front End Engineer Intern",
    time: "May, 2022 - Aug, 2022",
    description: [
      <>
        Built Ads entry point on Facebook, involving{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over 100 thousands of users
        </span>
        . Built an A/B testing of Ads entry point feature to collect of
        increasing conversion rate
      </>,
      <>
        Refactored dialog reactions header bar with Relay to improve data
        retrieve performance, involving
        <span className="underline decoration-wavy decoration-primary text-accent">
          {" "}
          all Facebook users
        </span>
        .
      </>,
    ],
  },
  {
    compnayName: "Lucid",
    title: "Senior Front End Enginner",
    time: "Dec, 2021 - Jul, 2022",
    description: [
      <>
        Improved user experience by supporting autoplay previews and enabling
        draggable segments trained AI model for e-commerce with http live
        streaming (hls) and React.js
      </>,
      <>
        <span className="underline decoration-wavy decoration-primary text-accent">
          Reduced 100% time of manual user account creations{" "}
        </span>{" "}
        by integrating 3 types auth flow with Firebase - Password Authentication
        & Email Verification, Phone Number, Google Sign-in
      </>,
    ],
  },
  {
    compnayName: "Garmin",
    title: "Engineer Staff II",
    time: "Aug, 2017 - Aug, 2019",
    description: [
      <>
        Built the web application that supports{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over 1 million users
        </span>{" "}
        to access their activity routes reliably
      </>,
      <>
        Migrated 14 Asia countries historical data{" "}
        <span className="underline decoration-wavy decoration-primary text-accent">
          over 700 million records{" "}
        </span>
        from MSSQL to MySQL
      </>,
      <>
        <span className="underline decoration-wavy decoration-primary text-accent">
          Reduced 100% of manual migration time
        </span>{" "}
        of users activity data from 14 countries by synchronization cron jobs
        (Java, Spring Boot, MySQL)
      </>,
    ],
  },
];

/**
 * @projects
 * custom your projects section
 */
export const projects = [
  {
    title: "Portfolio",
    url: "https://baskvava.github.io/portfolio/",
    githubUrl: "https://github.com/baskvava/portfolio",
    imgUrl: "https://baskvava.github.io/portfolio/portfolio.png",
    disabled: false,
    description: (
      <>
        A high-quality, beautiful portfolio website is visually appealing,
        well-organized
      </>
    ),
  },
  {
    title: "React Video Modal",
    url: "https://baskvava.github.io/react-video-modal/",
    githubUrl: "https://github.com/baskvava/react-video-modal",
    imgUrl: "https://baskvava.github.io/resume/react-video-modal.png",
    disabled: false,
    description: (
      <>
        Lets you focus video. Without wasting time to optimize the modal events.
      </>
    ),
  },
  {
    title: "Facebook Dialog",
    imgUrl: "https://baskvava.github.io/resume/facebook-dialog.png",
    disabled: true,
    description: (
      <>
        Refactor the Facebook Dialog with Relay to improve the data retrieve
        performance
      </>
    ),
  },
];

/**
 * @navbarButtons
 * custom your navbar buttons section
 */
export const navbarButtons = [
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "techStack", name: "Tech Stack" },
];

/**
 * @techStacks
 * custom your tech stack section
 */
export const techStacks = [
  {
    title: "JavaScript",
    url: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    percentage: "100%",
  },
  {
    title: "React.js",
    url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    percentage: "100%",
  },
  {
    title: "Relay",
    url: "https://www.vectorlogo.zone/logos/facebook_relay/facebook_relay-icon.svg",
    percentage: "80%",
  },
  {
    title: "GraphQL",
    url: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    percentage: "70%",
  },
  {
    title: "Webpack",
    url: "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    percentage: "70%",
  },
  {
    title: "Tailwind CSS",
    url: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    percentage: "80%",
  },
  {
    title: "Node JS",
    url: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    percentage: "80%",
  },
  {
    title: "Python",
    url: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    percentage: "80%",
  },
  {
    title: "Redis",
    url: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    percentage: "60%",
  },
  {
    title: "Git",
    url: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    percentage: "90%",
  },
];
