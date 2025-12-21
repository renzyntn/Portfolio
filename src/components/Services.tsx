import type { ServicesProp } from "../types/proptypes";

function Services({ section }: ServicesProp) {
  return (
    <div className="max-w-2xs md:max-w-full h-auto md:min-h-66 flex flex-col justify-center items-center space-y-3 md:space-y-2 p-4 bg-light-bg border-light-border/15 text-light-font border-2 rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
      <header className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"14"}
            height={"14"}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4.794c.092-.482.323-.942.696-1.314l.186-.186H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v2.532q.258.03.512.085c.47.102.814.412.988.791V6.25A3.25 3.25 0 0 0 17.75 3zm9.744 8.933L14.28 10.22a.75.75 0 1 0-1.06 1.06l1.691 1.692a5.1 5.1 0 0 1 1.083-1.04m-5.214-.653a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-2.47-2.47zm9.019.814c.353.077.44.507.185.762l-1.905 1.904a1.527 1.527 0 0 0 2.16 2.16l1.905-1.904c.255-.255.685-.168.762.185a4.075 4.075 0 0 1-5.57 4.622l-2.729 2.73a1.527 1.527 0 0 1-2.16-2.16l2.73-2.73a4.074 4.074 0 0 1 4.622-5.57"
            />
          </svg>
          <h2 className="text-2xl font-bold">{section}</h2>
        </div>
      </header>

      <div className="w-full flex justify-start items-center md:leading-relaxed">
        <ul className="flex flex-col text-base font-normal">
          <li className="pb-4 md:pt-1 whitespace-nowrap">
            Frontend Web Development
          </li>
          <li className="pb-4">Responsive Web Design</li>
          <li className="pb-4">Mobile-first Approach</li>
          <li className="pb-4 md:pb-10">UI/UX Design</li>
        </ul>
      </div>
    </div>
  );
}
export default Services;
