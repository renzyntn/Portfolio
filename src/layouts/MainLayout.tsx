import { Outlet } from "react-router-dom";
import type { MainLayoutProp } from "../types/proptypes";
import ChatPane from "../components/ChatPane";
import ChatButton from "../components/ChatButton";

function MainLayout({ theme, isChat, setIsChat, toggleChat }: MainLayoutProp) {
  return (
    <>
      <Outlet />
      <ChatButton theme={theme} isChat={isChat} toggleChat={toggleChat} />
      {isChat && <ChatPane theme={theme} setIsChat={setIsChat} />}
    </>
  );
}
export default MainLayout;
