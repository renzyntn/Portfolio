import { Outlet } from "react-router-dom";
import type { MainLayoutProp } from "../types/proptypes";
import ChatPane from "../components/ChatPane";
import ChatButton from "../components/ChatButton";

function MainLayout({
  theme,
  isChat,
  setIsChat,
  toggleChat,
  chatHistory,
  setChatHistory,
  isLoading,
  setIsLoading,
}: MainLayoutProp) {
  return (
    <>
      <Outlet />
      <ChatButton theme={theme} isChat={isChat} toggleChat={toggleChat} />
      {isChat && (
        <ChatPane
          theme={theme}
          setIsChat={setIsChat}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </>
  );
}
export default MainLayout;
