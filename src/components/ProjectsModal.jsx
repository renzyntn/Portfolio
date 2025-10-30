import { useEffect } from "react";
import projectsData from "../data.json";

function ProjectsModal(props) {

    // Create a copy of array from projectsData.json (slice), then reverse it to show the latest added project first
    const allProjects = projectsData.allprojects.slice().reverse();

    //Pre-load each project.image so it will display instantly once ProjectsModal gets opened
    useEffect(() => {
        allProjects.forEach((project) => {
            const projectImage = new Image();

            projectImage.src = project.image;
        })
    }, [])

    const projectCard = allProjects.map((project) => {
        return (
            <article className="card w-full md:min-h-[480px] flex flex-col justify-center items-center border-2 bg-light-bg border-light-border/15 dark:bg-dark-card dark:border-dark-border/15 animate-fade-in" key={project.id}>
                <figure className="w-full h-full">
                    <img className="w-full h-full object-cover" src={project.image} alt={project.alt}/>
                </figure>
                <div className="w-full flex flex-col justify-center items-start p-4 space-y-3 grow">
                    <h2 className="text-2xl font-bold">
                        {project.title}
                    </h2>
                    <div className="w-full flex flex-wrap justify-start items-center gap-1.5">
                        {project.techstack.map((language, i) => {
                            return(
                                <div className="badge badge-sm lg:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none" key={i}>
                                    {language}
                                </div>
                            )
                        })}
                    </div>
                    <p className="text-base font-normal">
                        {project.description}
                    </p>
                    <a className="w-20 h-10 flex justify-center items-center rounded-md cursor-pointer bg-light-button dark:bg-dark-button hover:bg-dark-button/15 dark:hover:bg-light-button/10" href={project.link} target={"_blank"}>
                        <span className="text-sm font-normal">
                            View
                        </span>
                    </a>
                </div>
            </article>
        )
    })
    
    return(
        <section className="fixed inset-0 z-999 max-w-full flex min-h-screen justify-center items-center mx-auto bg-light-bg dark:bg-dark-bg">
            <div className="max-w-full h-full flex flex-col justify-between items-center pt-8 px-8 md:px-10 xl:px-20 font-geist text-light-font dark:text-dark-font/80 overflow-auto">
                <header className="w-full flex gap-4 items-center mb-8">
                    <button onClick={props.toggleProjectsModal}>
                        <span className="flex items-center gap-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width={"20"} height={"20"} viewBox="0 0 24 24">
                                <path fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} d="m10 17l5-5l-5-5" strokeWidth={"1"} transform={"rotate(180 12 12)"} />
                            </svg>
                            <p className="text-xs lg:text-sm font-normal">Back</p>
                        </span>
                    </button>
                    <h2 className="text-2xl font-bold">
                        All Projects
                    </h2>
                </header>
                
                <div className="max-w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:px-15 lg:py-8 xl:px-40 gap-6">
                    {projectCard}
                </div>

                <footer className="w-full max-w-screen py-6 text-center mt-8 border-t border-light-border/30 dark:border-dark-border/30">
                    <div className="flex justify-center items-center">
                        <p className="text-sm font-normal">
                            {props.copyrightNote}
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}
export default ProjectsModal;