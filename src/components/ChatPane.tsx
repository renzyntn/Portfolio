import { useRef, useEffect } from "react";
import type { ChatPaneProp } from "../types/proptypes";
import profilePic from "../assets/images/image-profile.webp";
import profilePicDark from "../assets/images/image-profile-dark.webp";
import MessageLoading from "./Loading/MessageLoading";

function ChatPane({
  theme,
  setIsChat,
  chatHistory,
  setChatHistory,
  isLoading,
  setIsLoading,
}: ChatPaneProp) {
  const inputRef = useRef<HTMLInputElement | null>(null); // Declare inputRef as null (this will hold the value typed by users in input tag)
  const chatBubbleRef = useRef<HTMLDivElement | null>(null); // Declare chatBubbleRef as null (this will hold the div container of chat-bubble div)
  const imgIcon = theme ? profilePicDark : profilePic; // Declare imgIcon boolean based on theme value

  useEffect(() => {
    // Add guard for chatBubbleRef since TS is strict on 'null' values
    if (!chatBubbleRef.current) {
      return;
    }

    // Apply the autoScroll effect in chatBubbleRef (this will add the auto scroll down effect after a new user/aiResponse chat was added)
    chatBubbleRef.current.scrollTo({
      top: chatBubbleRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory, isLoading]); // Add chatHistory and isLoading state as dependencies.

  const fetchResponse = async (userMessage: string) => {
    try {
      setIsLoading(true); // Set isLoading state to true to show loading display while waiting for aiResponse

      const response = await fetch(`${import.meta.env.VITE_OPENROUTER_URL}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "arcee-ai/trinity-large-preview:free",
          messages: [
            {
              role: "system",
              content: `${import.meta.env.VITE_OPENROUTER_PROMPT}`,
            },
            { role: "user", content: userMessage },
          ],
        }),
      });
      // Get the response result and set it as 'data' value
      const data = await response.json();
      // Get the aiResponse text and set it as 'aiResponse' value
      const aiResponse = data.choices[0].message.content;

      // add/push the 'aiResponse' as a new object in chatHistory state '{role: "ai", content: aiResponse}'
      setChatHistory((prevResponse) => [
        ...prevResponse,
        { role: "ai", content: aiResponse },
      ]);
    } catch (err) {
      console.log("Fetch error: ", err);
      // add/push a catch error 'aiResponse' if an error occurs
      setChatHistory((prevResponse) => [
        ...prevResponse,
        {
          role: "ai",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      // Finally, set the isLoading state to false again to remove the Loading display in ChatPane
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Declare 'input' variable to represent inputRef (this holds the value typed by users)
    const input = inputRef.current;
    // Add guard for input since TS is strict on 'null' values
    if (!input) {
      return;
    }

    // Declare 'userMessage' variable that holds the input value and .trim() it
    const userMessage = input.value.trim();

    // Prevent users from submitting empty values after clicking submit
    if (!userMessage) {
      return;
    }

    // add/push the 'userMessage' as a new object in chatHistory state '{role: "user", content: userMessage}'
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: userMessage },
    ]);

    // Set 'userMessage' as the fetchResponse argument
    fetchResponse(userMessage);
    // Clear the field after submittion
    input.value = "";
  };

  // Declare 'displayChat' variable that maps through chatHistory array to display chat bubble
  const displayChat = chatHistory.map((chat, index) => {
    // Declare 'isUser' boolean variable to determine if the message came from the user/sender (this is for styling purposes)
    const isUser = chat.role === "user";

    return (
      <div className={`chat ${isUser ? "chat-end" : "chat-start"}`} key={index}>
        {!isUser && (
          <div className="chat-image avatar">
            <div className="size-6 rounded-full">
              <img src={imgIcon} alt={"Renzy Antonio - Frontend Developer"} />
            </div>
          </div>
        )}
        <div className="chat-header mb-1 font-medium">
          {isUser ? "You" : "Renzy"}
        </div>
        <div
          className={`chat-bubble p-3 rounded-lg ${isUser ? " bg-dark-bg dark:bg-light-bg" : " bg-gray-100 dark:bg-dark-card"}`}
        >
          <p
            className={`text-wrap text-sm ${isUser ? "text-dark-font dark:text-light-font" : "text-light-font dark:text-dark-font"}`}
          >
            {chat.content}
          </p>
        </div>
      </div>
    );
  });

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
      <div
        className="h-100 flex flex-col p-4 space-y-4 overflow-y-auto"
        ref={chatBubbleRef}
      >
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
        {displayChat}
        {isLoading && <MessageLoading imgIcon={imgIcon} />}
      </div>
      <div className="p-4 border-t border-light-border/20 dark:border-dark-border/20">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              className="w-full p-2 rounded-md border border-light-border/15 dark:border-dark-border/20 focus:outline-none"
              type="text"
              placeholder="Your message..."
              ref={inputRef}
              disabled={isLoading}
            />
            <button
              className="p-2 rounded-md bg-dark-bg dark:bg-light-bg text-dark-font dark:text-light-font cursor-pointer"
              type="submit"
              aria-label="Send Message Button"
              disabled={isLoading}
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
