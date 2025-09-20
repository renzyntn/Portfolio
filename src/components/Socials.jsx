function Socials(props) {

    //Map over the props titleLink Object
    const socialAndLink = props.titleLink.map((social) => {
        return(
            <a className="w-auto h-auto flex flex-col justify-center items-center gap-0.5" key={social.id} href={social.link} target={"_blank"} aria-label={`Visit ${social.title} profile`}>
                <svg xmlns="http://www.w3.org/2000/svg" width={"26"} height={"26"} viewBox="0 0 24 24">
                    <path fill={"currentColor"} d={social.svgPath}/>
                </svg>
                <p className="text-[0.5rem] md:text-xs font-medium">
                    {social.title}
                </p>
            </a>
        )
    })

    return(
        <div className="max-w-2xs md:max-w-full h-auto flex justify-evenly items-center px-5 py-1 bg-light-bg border-light-border/15 border-2 text-light-font rounded-lg font-geist dark:bg-dark-card dark:border-dark-border/15 dark:text-dark-font/80 animate-fade-in">
            {socialAndLink}
        </div>
    );
}
export default Socials;