// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router and Route
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
// import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div id="#">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
