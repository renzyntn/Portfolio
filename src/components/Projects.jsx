import projectsData from "../projectsdata.json"

function Projects(props) {

    // Create a copy of array from projectsData.json and get the first 4 index (slice), then reverse it to show the latest added project first
    const recentProjects = projectsData.allprojects.slice(0, 4).reverse();

    //Map over the projects props Object
    const projList = recentProjects.map((project) => {
        return(
            <article className="flex flex-col justify-center items-start p-1.5 md:p-2 space-y-1 border-light-border/20 dark:border-dark-border/20 border-1 rounded-md transform hover:-translate-y-1 transition duration-300 ease-in-out" key={project.id}>
                <h3 className="text-base font-medium">
                    {project.title}
                </h3>
                <p className="text-xs font-normal">
                    {project.shortdescription}
                </p>
                <a className="w-full md:w-15 h-7 md:h-6 flex justify-center items-center py-1 bg-light-button dark:bg-dark-button dark:text-dark-font/80 rounded-sm" href={project.link} target={"_blank"}>
                    <span className="text-[0.5rem] font-semibold">
                        View
                    </span>
                </a>
            </article>
        )
    })

    return(
        <div className="max-w-2xs md:max-w-full h-auto md:min-h-66 flex flex-col justify-center items-center space-y-3 md:space-y-2 p-4 bg-light-bg border-light-border/15 text-light-font border-2 rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
            <header className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={"14"} height={"14"} viewBox="0 0 48 48">
                        <path fill={"currentColor"} stroke="currentColor" strokeLinejoin="round" strokeWidth="4" d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Zm17-8a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm5 8H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <h2 className="text-2xl font-bold">
                        {props.section}
                    </h2>
                </div>
                <button onClick={props.toggleProjectsModal} className="h-6 flex justify-center items-center cursor-pointer">
                    <span className="flex items-center gap-1">
                        <p className="text-xs font-normal">View All</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={"20"} height={"20"} viewBox="0 0 24 24">
                            <path fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} d="m10 17l5-5l-5-5" strokeWidth={"1"} />
                        </svg>
                    </span>
                </button>
            </header>

            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 md:gap-2">
                {projList}
            </div>
        </div>
    );
}
export default Projects;