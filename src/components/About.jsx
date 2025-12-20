import aboutData from "../data.json";

function About({ section, toggleTheme, theme }) {
  return (
    <div className="max-w-2xs md:max-w-full h-auto flex flex-col justify-center items-center space-y-3 md:space-y-2 p-4 bg-light-bg border-light-border/15 text-light-font border-2 rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
      <header className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"14"}
            height={"14"}
            viewBox="0 0 512 512"
          >
            <path
              fill={"currentColor"}
              d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256 16a72 72 0 1 0 0-144a72 72 0 1 0 0 144"
            />
          </svg>
          <h2 className="text-2xl font-bold">{section}</h2>
        </div>
        <button
          className="w-6 h-6 flex justify-center items-center border-light-border/15 dark:border-dark-font/15 border-1 rounded-full cursor-pointer tooltip tooltip-top"
          onClick={toggleTheme}
          data-tip={
            theme ? aboutData.about.tooltipLight : aboutData.about.tooltipDark
          }
          aria-label={theme ? "Toggle Light Mode" : "Toggle Dark Mode"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"20"}
            height={"20"}
            viewBox="0 0 24 24"
          >
            <path
              fill={"currentColor"}
              d={
                theme
                  ? aboutData.about.svgPathLight
                  : aboutData.about.svgPathDark
              }
            />
          </svg>
        </button>
      </header>

      <div className="w-auto md:max-w-[32.5rem] h-auto md:max-h-[14.7rem]">
        <p className="text-base text-start font-normal md:pb-0.5 md:leading-relaxed md:line-clamp-9 whitespace-pre-line">
          {aboutData.about.description}
        </p>
      </div>
    </div>
  );
}
export default About;
