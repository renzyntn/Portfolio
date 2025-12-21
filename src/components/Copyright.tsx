import type { CopyrightProp } from "../types/proptypes";

function Copyright({ copyrightNote }: CopyrightProp) {
  return (
    <div className="max-w-2xs md:max-w-full h-auto flex justify-center items-center gap-5 p-2 bg-light-bg border-light-border/15 text-light-font border-2 rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
      <p className="text-xs font-normal">{copyrightNote}</p>
    </div>
  );
}
export default Copyright;
