import { useState, useEffect } from "react"
import Profile from "./components/Profile";
import About from "./components/About";
import Socials from "./components/Socials";
import Projects from "./components/Projects";
import ProjectsModal from "./components/ProjectsModal";
import Services from "./components/Services";
import Education from "./components/Education";
import Techstack from "./components/Techstack";
import Copyright from "./components/Copyright";
import profilePic from "./assets/images/image-profile.png";
import profilePicDark from "./assets/images/image-profile-dark.png";

function App() {

  //Profile Component
  //Apply useEffect to render images on first mount to prevent re-render when setting new image on new theme
  useEffect(() => {
    const imgLightBg = new Image();
    const imgDarkBg = new Image();

    imgLightBg.src = profilePic;
    imgDarkBg.src = profilePicDark;
  }, [])

  //About Component
  const [theme, setTheme] = useState(() => {                //Set website theme based on the theme state boolean value
    const checkPastTheme = localStorage.getItem('theme');   //Get localStorage key value to determine theme
    return checkPastTheme 
      ? JSON.parse(checkPastTheme)                          //If true, set the theme saved from localStorage
      : window.matchMedia('(prefers-color-scheme: dark)').matches;  // If false, then set the theme depending on OS theme
  });

  function toggleTheme() {
    setTheme(prevTheme => {
      const setNewTheme = !prevTheme;
      localStorage.setItem('theme', JSON.stringify(setNewTheme));
      return setNewTheme;
    })
  }

  //Project Modal Component
  const [showProjectsModal, setShowProjectModal] = useState(false); //State for ProjectsModal Component

  function toggleProjectsModal() {
    setShowProjectModal(prevProjectModal => !prevProjectModal);
  }

  useEffect(() => {                             //Apply useEffect to hide body scroller when Project Modal Component is showing
    if (showProjectsModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [showProjectsModal])

  //Copyright Component
  let currentYear = new Date().getFullYear(); //Get latest year to display in copyright paragraph
  const copyrightNote = `© ${currentYear} Renzy Antonio, All rights reserved.`;

  return (
    <main className={`${theme ? "dark" : ""} min-h-screen flex justify-center items-center bg-light-bg dark:bg-dark-bg`}>
      <section className="h-full w-auto max-w-[57rem] grid grid-cols-1 md:grid-cols-6 justify-center items-center px-3 py-8 sm:p-8 gap-2 md:gap-1 overflow-auto">
        <div className="md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 md:row-end-3">
          <Profile
            img={theme ? profilePicDark : profilePic}
            alt={"Renzy Antonio - Frontend Developer"}
            name={"Renzy Antonio"}
            jobtitle={"Frontend Developer"}
            location={"Manila, Philippines"}
            svgPath={`M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 
                      7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 
                      1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732
                      `}
          />
        </div>
        <div className="md:col-span-4 md:col-start-3 md:row-span-2 md:row-start-2 md:row-end-3">
          <Socials/>
        </div>
        <div className="md:col-span-4 md:col-start-3 md:row-span-2 md:row-start-1 md:row-end-1">
          <About
            section={"About"}
            theme={theme}
            toggleTheme={toggleTheme}
            par={`I’m a frontend developer that is passionate about creating engaging, user-friendly UI/UX that are fast, responsive, and minimalist. I’m always learning and staying up to date with the latest technology trends to ensure my designs and code are up to date.
                  
                  With a strong attention to detail, time management skills, and the ability to accept feedback for continuous improvement, I aim to deliver clean and efficient solutions that meet both user needs and business goals.
                `}
            svgPathLight={`M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12t.288-.712T20
                11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12
                23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7t-.687.288t-.713-.288M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425
                18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6
                19.425q-.275.3-.7.288t-.725-.288`
              }
            svgPathDark={`M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575
                3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21`
              }
          />
        </div>
        <div className="md:col-span-4 md:col-start-1 md:row-span-2 md:row-start-3 md:row-end-5">
          <Projects
            section={"Projects"}
            toggleProjectsModal={toggleProjectsModal}
          />
        </div>
        <div className="md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-3 md:row-end-5">
          <Services 
            section={"Services"} 
          />
        </div>
        <div className="md:col-span-3 md:col-start-4 md:row-span-2 md:row-start-5">
          <Techstack
            section={"Techstack & Tools"}
          />
        </div>
        <div className="md:col-span-3 md:col-start-1 md:row-span-2 md:row-start-5 md:row-end-6">
          <Education 
            section={"Education"} 
          />
        </div>
        <div className="md:col-span-3 md:col-start-1 md:row-span-1 md:row-start-6">
          <Copyright
            copyrightNote={copyrightNote}
          />
        </div>
      </section>
      {showProjectsModal &&
        <ProjectsModal 
          showProjectsModal={showProjectsModal}
          toggleProjectsModal={toggleProjectsModal}
          copyrightNote={copyrightNote}
        />
      }
    </main>
  );
}
export default App;