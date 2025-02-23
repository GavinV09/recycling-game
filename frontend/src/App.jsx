import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import GameContainer from "./components/GameContainer";
import GameDescription from "./components/GameDescription";
import EducationalImpact from "./components/EducationalImpact";
import "./App.css";

function App() {
  // Load theme from localStorage or default to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount & when it changes
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/game"
            element={
              <>
                <GameContainer />
                <GameDescription />
                <EducationalImpact />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </DndProvider>
  );
}

export default App;