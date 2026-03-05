import { Outlet } from "react-router-dom";
import type { MainLayoutProp } from "../types/proptypes";
import { useToggleStore } from "../store/useToggleStore";
import ChatPane from "../components/ChatPane";
import ChatButton from "../components/ChatButton";

function MainLayout({ theme }: MainLayoutProp) {
  const { isChat } = useToggleStore();
  return (
    <>
      <Outlet />
      <ChatButton theme={theme} />
      {isChat && <ChatPane theme={theme} />}
    </>
  );
}
export default MainLayout;
