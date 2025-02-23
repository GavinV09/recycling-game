import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GameContainer from "./components/GameContainer";
import GameDescription from "./components/GameDescription";
import EducationalImpact from "./components/EducationalImpact";
import "./App.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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