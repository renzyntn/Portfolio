import type { ChatPaneProp } from "../types/proptypes";
import profilePic from "../assets/images/image-profile.webp";
import profilePicDark from "../assets/images/image-profile-dark.webp";

function ChatPane({ theme, setIsChat }: ChatPaneProp) {
  const imgIcon = theme ? profilePicDark : profilePic;

  return (
    <div
      className={`fixed w-xs md:w-sm bottom-25 right-6 sm:right-8 font-geist rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border/15 dark:border-dark-border/20 text-light-font dark:text-dark-font animate-fade-in ${theme ? "dark" : ""}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-light-border/20 dark:border-dark-border/20">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full overflow-hidden">
            <img src={imgIcon} alt={"Renzy Antonio - Frontend Developer"} />
          </div>
          <div>
            <h3 className="font-semibold">Renzy Antonio</h3>
            <p className="flex items-center gap-1 font-medium text-xs">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Online
            </p>
          </div>
        </div>
        <button
          className="size-6 cursor-pointer"
          aria-label="Close Button"
          onClick={() => setIsChat(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill={"currentColor"}
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="h-100 flex flex-col p-4 space-y-4 overflow-y-auto">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="size-6 rounded-full">
              <img src={imgIcon} alt={"Renzy Antonio - Frontend Developer"} />
            </div>
          </div>
          <div className="chat-header mb-1 font-medium">Renzy</div>
          <div className="chat-bubble p-3 text-sm text-light-font dark:text-dark-font bg-gray-100 dark:bg-dark-card rounded-lg">
            Hey there! Thanks for stopping by. Feel free to ask me anything
            about my profession, projects, tech stack, or hobbies.
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-light-border/20 dark:border-dark-border/20">
        <form>
          <div className="flex gap-2">
            <input
              className="w-full p-2 rounded-md border border-light-border/15 dark:border-dark-border/20 focus:outline-none"
              placeholder="Your message..."
              required
            />
            <button
              className="p-2 rounded-md bg-dark-bg dark:bg-light-bg text-dark-font dark:text-light-font cursor-pointer"
              type="submit"
              aria-label="Send Button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5.694 12L2.299 3.272a.75.75 0 0 1 .942-.982l.093.039l18 9a.75.75 0 0 1 .097 1.284l-.097.058l-18 9c-.583.291-1.217-.245-1.065-.848l.03-.095zL2.299 3.272zM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChatPane;
