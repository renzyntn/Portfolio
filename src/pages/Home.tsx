import type { HomeProp } from "../types/proptypes";
import Profile from "../components/Profile";
import About from "../components/About";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Education from "../components/Education";
import Techstack from "../components/Techstack";
import Copyright from "../components/Copyright";
import profilePic from "../assets/images/image-profile.webp";
import profilePicDark from "../assets/images/image-profile-dark.webp";

function Home({ theme, copyrightNote, toggleTheme }: HomeProp) {
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
          <Projects section={"Projects"} />
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
    </main>
  );
}
export default Home;
