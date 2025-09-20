function Techstack(props) {

    //Map over the props techStack Object
    const techStackTools = props.techStack.map((stack) => {
        return(
            <div className="flex justify-start items-center gap-2" key={stack.id}>
                <svg xmlns="http://www.w3.org/2000/svg" width={"32"} height={"32"} viewBox="0 0 32 32">
                    <path fill={"currentColor"} d={stack.svgPath}/>
                </svg>
                <p className="text-xs md:text-base font-normal">{stack.title}</p>
            </div>
        )
    })

    return(
        <div className="max-w-2xs md:max-w-full h-auto md:min-h-78.5 flex flex-col justify-center items-center space-y-3 md:space-y-2 p-4 bg-light-bg border-light-border/15 text-light-font border-2 rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
            <header className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={"14"} height={"14"} viewBox="0 0 20 20">
                        <g fill={"currentColor"}>
                            <path d="m3.196 12.87l-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484l-5.666 3.322a2.25 2.25 0 0 1-2.276 0z"/>
                            <path d="m3.196 8.87l-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484l-5.666 3.322a2.25 2.25 0 0 1-2.276 0z"/><path d="M10.38 1.103a.75.75 0 0 0-.76 0l-7.25 4.25a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0 0-1.294z"/>
                        </g>
                    </svg>
                    <h1 className="text-2xl font-bold">
                        {props.section}
                    </h1>
                </div>
            </header>

            <div className="w-full md:min-h-[14.5rem] grid grid-cols-2 justify-center items-center gap-4 md:mb-1.5">
                {techStackTools}
            </div>
        </div>
    );
}
export default Techstack;