import { PulseLoader } from "react-spinners";

function MessageLoading({ imgIcon }: { imgIcon: string }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="size-6 rounded-full">
          <img src={imgIcon} alt={"Renzy Antonio - Frontend Developer"} />
        </div>
      </div>
      <div className="chat-header mb-1 font-medium">Renzy</div>
      <div className="chat-bubble p-3 text-sm text-light-font dark:text-dark-font bg-gray-100 dark:bg-dark-card rounded-lg">
        <p>
          <PulseLoader
            color="currentColor"
            size={6}
            speedMultiplier={0.5}
            aria-label="Message Loading Spinner"
          />
        </p>
      </div>
    </div>
  );
}

export default MessageLoading;
