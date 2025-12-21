import type { EducationProp } from "../types/proptypes";

function Education({ section }: EducationProp) {
  return (
    <div className="max-w-2xs md:max-w-full h-auto flex flex-col justify-center items-center space-y-3 md:space-y-2 p-4 bg-light-bg border-light-border/15 text-light-font border-2 rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
      <header className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"14"}
            height={"14"}
            viewBox="0 0 16 16"
          >
            <g fill={"currentColor"}>
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
            </g>
          </svg>
          <h2 className="text-2xl font-bold">{section}</h2>
        </div>
      </header>

      <div className="w-full flex flex-col justify-center items-start">
        <article className="md:w-full md:relative flex flex-col mb-3.5">
          <h3 className="text-base font-normal pb-2">
            College - BS Information Technology
          </h3>
          <h4 className="text-xs italic pb-2 md:pb-0">
            La Consolacion University Philippines
          </h4>
          <span className="md:absolute top-0 right-0 w-fit flex justify-center items-center p-1.5 border-light-border/15 dark:border-dark-border/20 border-1 rounded-md">
            <p className="text-xs font-normal">2025</p>
          </span>
        </article>
        <article className="md:w-full md:relative flex flex-col mb-3.5">
          <h3 className="text-base font-normal pb-2">Senior High School</h3>
          <h4 className="text-xs italic pb-2 md:pb-0">
            La Consolacion University Philippines
          </h4>
          <span className="md:absolute top-0 right-0 w-fit flex justify-center items-center p-1.5 border-light-border/15 dark:border-dark-border/20 border-1 rounded-md">
            <p className="text-xs font-normal">2021</p>
          </span>
        </article>
        <article className="md:w-full md:relative flex flex-col md:mb-6.5">
          <h3 className="text-base font-normal pb-2">Junior High School</h3>
          <h4 className="text-xs italic pb-2 md:pb-0">
            Iba National High School
          </h4>
          <span className="md:absolute top-0 right-0 w-fit flex justify-center items-center p-1.5 border-light-border/15 dark:border-dark-border/20 border-1 rounded-md">
            <p className="text-xs font-normal">2018</p>
          </span>
        </article>
      </div>
    </div>
  );
}
export default Education;
