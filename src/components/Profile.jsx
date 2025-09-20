function Profile(props) {
  return(
    <div className="max-w-2xs md:max-w-full h-auto md:min-h-[23.25rem] flex flex-col justify-center items-center space-y-3 md:space-y-2 p-4 bg-light-bg border-light-border/20 border-2 dark:bg-dark-card dark:border-dark-border/15 rounded-lg font-geist animate-fade-in">
        <div className="size-50 flex justify-center items-center border-light-border/20 dark:border-dark-border/20 border-2 rounded-full overflow-hidden">
            <img src={props.img} alt={props.alt}/>
        </div>

        <div className="flex flex-col justify-center items-center text-light-font dark:text-dark-font/80">
            <h1 className="text-2xl lg:text-3xl font-semibold md:pb-1">
              {props.name}
            </h1>
            <h2 className="text-base font-medium md:pb-1">
              {props.jobtitle}
            </h2>
            <span className="flex justify-center items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width={"14"} height={"14"} viewBox="0 0 24 24">
                  <path fill={"currentColor"} d={props.svgPath}/>
                </svg>
                <h3 className="text-sm font-normal">
                  {props.location}
                </h3>
            </span>
        </div>
    </div>
  );
}
export default Profile;