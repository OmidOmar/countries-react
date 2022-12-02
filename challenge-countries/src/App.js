import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : null}>
      <Header handleDarkMode={handleDarkMode} />
      <Search />
    </div>
  );
}

export default App;
