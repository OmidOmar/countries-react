import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const Footer = () => {
    return (
      <div>
        © CYF by <a href="https://github.com/OmidOmar">Omid Omar</a>
      </div>
    );
  };

  return (
    <div className={darkMode ? "dark" : null}>
      <Header handleDarkMode={handleDarkMode} />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
