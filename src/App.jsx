import { useState, useEffect } from "react";
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
  //About Component
  const [theme, setTheme] = useState(() => {
    //Set website theme based on the theme state boolean value
    const checkPastTheme = localStorage.getItem("theme"); //Get localStorage key value to determine theme
    return checkPastTheme
      ? JSON.parse(checkPastTheme) //If true, set the theme saved from localStorage
      : window.matchMedia("(prefers-color-scheme: dark)").matches; // If false, then set the theme depending on OS theme
  });

  //Project Modal Component
  const [showProjectsModal, setShowProjectModal] = useState(false); //State for ProjectsModal Component

  //Copyright Component
  let currentYear = new Date().getFullYear(); //Get latest year to display in copyright paragraph
  const copyrightNote = `© ${currentYear} Renzy Antonio, All rights reserved.`;

  //Profile Component
  //Apply useEffect to render images on first mount to prevent re-render when setting new image on new theme
  useEffect(() => {
    const imgLightBg = new Image();
    const imgDarkBg = new Image();

    imgLightBg.src = profilePic;
    imgDarkBg.src = profilePicDark;
  }, []);

  useEffect(() => {
    //Apply useEffect to hide body scroller when Project Modal Component is showing
    if (showProjectsModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showProjectsModal]);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const setNewTheme = !prevTheme;
      localStorage.setItem("theme", JSON.stringify(setNewTheme));
      return setNewTheme;
    });
  }

  function toggleProjectsModal() {
    setShowProjectModal((prevProjectModal) => !prevProjectModal);
  }

  return (
    <main
      className={`${
        theme ? "dark" : ""
      } min-h-screen flex justify-center items-center bg-light-bg dark:bg-dark-bg`}
    >
      <section className="h-full w-auto max-w-[57rem] grid grid-cols-1 md:grid-cols-6 justify-center items-center px-3 py-8 sm:p-8 gap-2 md:gap-1 overflow-auto">
        <div className="md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 md:row-end-3">
          <Profile img={theme ? profilePicDark : profilePic} />
        </div>
        <div className="md:col-span-4 md:col-start-3 md:row-span-2 md:row-start-2 md:row-end-3">
          <Socials />
        </div>
        <div className="md:col-span-4 md:col-start-3 md:row-span-2 md:row-start-1 md:row-end-1">
          <About section={"About"} theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="md:col-span-4 md:col-start-1 md:row-span-2 md:row-start-3 md:row-end-5">
          <Projects
            section={"Projects"}
            toggleProjectsModal={toggleProjectsModal}
          />
        </div>
        <div className="md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-3 md:row-end-5">
          <Services section={"Services"} />
        </div>
        <div className="md:col-span-3 md:col-start-4 md:row-span-2 md:row-start-5">
          <Techstack section={"Techstack & Tools"} />
        </div>
        <div className="md:col-span-3 md:col-start-1 md:row-span-2 md:row-start-5 md:row-end-6">
          <Education section={"Education"} />
        </div>
        <div className="md:col-span-3 md:col-start-1 md:row-span-1 md:row-start-6">
          <Copyright copyrightNote={copyrightNote} />
        </div>
      </section>
      {showProjectsModal && (
        <ProjectsModal
          toggleProjectsModal={toggleProjectsModal}
          copyrightNote={copyrightNote}
        />
      )}
    </main>
  );
}
export default App;
