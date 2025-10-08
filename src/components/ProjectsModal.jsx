
function ProjectsModal(props) {
    return(
        <section className="fixed inset-0 z-999 max-w-full flex min-h-screen justify-center items-center mx-auto bg-light-bg dark:bg-dark-bg">
            <div className="max-w-full h-full flex flex-col justify-between items-center pt-8 px-8 md:px-10 lg:px-20 font-geist text-light-font dark:text-dark-font/80 overflow-auto">
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
                
                <div className="max-w-full h-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:px-15 lg:py-8 xl:px-40 gap-3 md:gap-6">
                    <div className="card w-full flex flex-col justify-center items-center border-2 bg-light-bg border-light-border/15 dark:bg-dark-card dark:border-dark-border/15 animate-fade-in">
                        <figure className="w-full h-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes"/>
                        </figure>

                        <div className="w-full flex flex-col justify-center items-start px-4 py-6 space-y-3">
                            <h2 className="text-2xl font-bold">
                                Portfolio
                            </h2>
                            <div className="w-full flex flex-wrap justify-start items-center gap-1.5">
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                            </div>
                            <p className="text-base font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                            </p>
                            <a className="w-20 h-10 flex justify-center items-center rounded-md cursor-pointer bg-light-button dark:bg-dark-button">
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

                        <div className="w-full flex flex-col justify-center items-start px-4 py-6 space-y-3">
                            <h2 className="text-2xl font-bold">
                                Portfolio
                            </h2>
                            <div className="w-full flex flex-wrap justify-start items-center gap-1.5">
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                            </div>
                            <p className="text-base font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                            </p>
                            <a className="w-20 h-10 flex justify-center items-center rounded-md cursor-pointer bg-light-button dark:bg-dark-button">
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

                        <div className="w-full flex flex-col justify-center items-start px-4 py-6 space-y-3">
                            <h2 className="text-2xl font-bold">
                                Portfolio
                            </h2>
                            <div className="w-full flex flex-wrap justify-start items-center gap-1.5">
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                            </div>
                            <p className="text-base font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                            </p>
                            <a className="w-20 h-10 flex justify-center items-center rounded-md cursor-pointer bg-light-button dark:bg-dark-button">
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

                        <div className="w-full flex flex-col justify-center items-start px-4 py-6 space-y-3">
                            <h2 className="text-2xl font-bold">
                                Portfolio
                            </h2>
                            <div className="w-full flex flex-wrap justify-start items-center gap-1.5">
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">React</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Tailwind</div>
                                <div className="badge badge-sm sm:badge-md text-light-font dark:text-dark-font/80 bg-light-button dark:bg-dark-button rounded-full border-none">Daisy UI</div>
                            </div>
                            <p className="text-base font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique voluptatibus tempore vero iusto excepturi ad qui, magni voluptatem animi consequatur corporis aut consectetur voluptatum earum consequuntur non ullam eligendi.
                            </p>
                            <a className="w-20 h-10 flex justify-center items-center rounded-md cursor-pointer bg-light-button dark:bg-dark-button">
                                <span className="text-sm font-normal">
                                    View
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <footer className="w-full max-w-screen py-6 text-center mt-8 border-t border-light-border/30 dark:border-dark-border/30">
                    <div className="flex justify-center items-center">
                        <p className="text-sm font-normal">
                            © 2025 Renzy Antonio, All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}
export default ProjectsModal;