import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import type { ChatType } from "./types/proptypes";
import Home from "./pages/Home";
import ProjectsModal from "./pages/ProjectsModal";
import MainLayout from "./layouts/MainLayout";

function App() {
  //About Component
  const [theme, setTheme] = useState<boolean>(() => {
    //Set website theme based on the theme state boolean value
    const checkPastTheme = localStorage.getItem("theme"); //Get localStorage key value to determine theme
    return checkPastTheme
      ? JSON.parse(checkPastTheme) //If true, set the theme saved from localStorage
      : window.matchMedia("(prefers-color-scheme: dark)").matches; // If false, then set the theme depending on OS theme
  });

  //ChatPane Component
  const [chatHistory, setChatHistory] = useState<ChatType[]>([]); // Declare chatHistory state as empty array
  const [isLoading, setIsLoading] = useState(false); // Declare isLoading state as false

  //Copyright Component
  const currentYear = new Date().getFullYear(); //Get latest year to display in copyright paragraph
  const copyrightNote = `© ${currentYear} Renzy Antonio, All rights reserved.`;

  const [isChat, setIsChat] = useState(false);

  function toggleTheme() {
    setTheme((prevTheme) => {
      const setNewTheme = !prevTheme;
      localStorage.setItem("theme", JSON.stringify(setNewTheme));
      return setNewTheme;
    });
  }

  function toggleChat() {
    setIsChat(true);
  }

  return (
    <Router>
      <Routes>
        <Route
          element={
            <MainLayout
              theme={theme}
              isChat={isChat}
              setIsChat={setIsChat}
              toggleChat={toggleChat}
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        >
          <Route
            index
            element={
              <Home
                theme={theme}
                copyrightNote={copyrightNote}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsModal theme={theme} copyrightNote={copyrightNote} />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
