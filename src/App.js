import "./App.scss";
import { useState } from "react";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { useColorMode } from "theme-ui";

import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const [colorMode, setColorMode] = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <div className="n-right">
         <Toggle onClick={handleClick} colorMode={colorMode}/>
      </div>
      {!isSidebarActive ? (
        <UilBars
          className="hamburger-icon"
          onClick={() => setIsSidebarActive(true)}
        />
      ) : (
        <UilTimes
          className="cross-icon"
          onClick={() => setIsSidebarActive(false)}
        />
      )}
      <Sidebar isSidebarActive={isSidebarActive} onClick={handleClick}>
        <Chat />
      </Sidebar>
    </div>
  );
}

export default App;
