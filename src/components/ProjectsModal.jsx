
function ProjectsModal(props) {
    return(
        <div className="max-w-[57rem] flex h-screen justify-center items-center mx-auto bg-light-bg dark:bg-dark-bg fixed z-999 top-0 right-0 bottom-0 left-0">
            <div className="max-w-full h-full flex flex-col justify-between items-center p-8 space-y-10 font-geist text-light-font dark:text-dark-font/80 overflow-auto">
                <header className="w-full flex gap-4 items-center">
                    <button onClick={props.toggleProjectsModal}>
                        <span className="flex items-center gap-1 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width={"20"} height={"20"} viewBox="0 0 24 24">
                                <path fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} d="m10 17l5-5l-5-5" strokeWidth={"1"} transform={"rotate(180 12 12)"} />
                            </svg>
                            <p className="text-xs font-normal">Back</p>
                        </span>
                    </button>
                    <h2 className="text-2xl font-bold">
                        All Projects
                    </h2>
                </header>
                
                <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 md:gap-2">
                    <div className="card w-full flex flex-col justify-center items-center border-2 bg-light-bg border-light-border/15 dark:bg-dark-card dark:border-dark-border/15 animate-fade-in">
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes"/>
                        </figure>

                        <div className="flex flex-col justify-center items-start px-4 py-8 space-y-3">
                            <h2 className="text-2xl font-bold">
                                Portfolio
                            </h2>
                            <div className="w-full flex justify-start items-center gap-1.5">
                                <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                                <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                                <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                            </div>
                            <p className="text-base font-normal line-clamp-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                            </p>
                            <a className="w-1/4 h-10 flex justify-center items-center rounded-md bg-light-button dark:bg-dark-button">
                                <span className="text-sm font-normal">
                                    View
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="card w-full flex flex-col justify-center items-center border-2 bg-light-bg border-light-border/15 dark:bg-dark-card dark:border-dark-border/15 animate-fade-in">
                        <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes"/>
                        </figure>

                        <div className="flex flex-col justify-center items-start px-4 py-8 space-y-3">
                            <h2 className="text-2xl font-bold">
                                Portfolio
                            </h2>
                            <div className="w-full flex justify-start items-center gap-1.5">
                                <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                                <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                                <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                            </div>
                            <p className="text-base font-normal line-clamp-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                            </p>
                            <a className="w-1/4 h-10 flex justify-center items-center rounded-md bg-light-button dark:bg-dark-button">
                                <span className="text-sm font-normal">
                                    View
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <footer className="w-full max-w-screen py-8 mx-auto text-center border-t border-light-border/30 dark:border-dark-border/30">
                    <div className="flex justify-center items-center">
                        <p className="text-sm font-normal">
                            © 2025 Renzy Antonio, All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default ProjectsModal;

{
  /*
    <div className="w-full h-full flex flex-col justify-center items-center px-3 py-8 sm:p-8 space-y-8 rounded-none font-geist text-light-font dark:text-dark-font/80">
        <header className="w-full flex gap-4 items-center">
            <button onClick={props.toggleProjectsModal}>
                <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={"20"} height={"20"} viewBox="0 0 24 24">
                        <path fill={"none"} stroke={"currentColor"} strokeLinecap={"round"} strokeLinejoin={"round"} d="m10 17l5-5l-5-5" strokeWidth={"1"} transform={"rotate(180 12 12)"} />
                    </svg>
                    <p className="text-xs font-normal">Back</p>
                </span>
            </button>
            <h2 className="text-2xl font-bold">
                All Projects
            </h2>
        </header>
        
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 md:gap-2">
            <div className="card w-full flex flex-col justify-center items-center border-2 bg-light-bg border-light-border/15 dark:bg-dark-card dark:border-dark-border/15 animate-fade-in">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes"/>
                </figure>

                <div className="flex flex-col justify-center items-start px-4 py-8 space-y-3">
                    <h2 className="text-2xl font-bold">
                        Portfolio
                    </h2>
                    <div className="w-full flex justify-start items-center gap-1.5">
                        <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                        <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                        <div className="badge badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                    </div>
                    <p className="text-base font-normal line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                    </p>
                    <a className="w-1/4 h-10 flex justify-center items-center rounded-md bg-light-button dark:bg-dark-button">
                        <span className="text-sm font-normal">
                            View
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <footer>
            <p>
                © 2025 Renzy Antonio, All rights reserved.
            </p>
        </footer>
    </div>
*/
}