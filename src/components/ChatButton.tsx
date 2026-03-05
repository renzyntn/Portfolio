import type { ChatButtonProp } from "../types/proptypes";
import { useToggleStore } from "../store/useToggleStore";

function ChatButton({ theme }: ChatButtonProp) {
  const { isChat, toggleChat } = useToggleStore();
  return (
    <button
      className={`fixed p-4 bottom-6 right-6 sm:bottom-8 sm:right-8 rounded-lg bg-dark-bg dark:bg-light-bg text-dark-font dark:text-light-font cursor-pointer ${theme ? "dark" : ""}`}
      onClick={toggleChat}
      disabled={isChat}
    >
      <span className="flex justify-center items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11v.01M8 11v.01m8-.01v.01M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"
          ></path>
        </svg>
        <p className="font-medium text-base">Chat</p>
      </span>
    </button>
  );
}
export default ChatButton;
