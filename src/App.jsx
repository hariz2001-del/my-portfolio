import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import "./App.css";

const titles = {
  "/": "Hariz Helmi — CV, Projects & Technical Work",
  "/projects": "Projects — Hariz Helmi",
  "/about": "Professional Profile — Hariz Helmi",
  "/cv": "Professional Profile & CV — Hariz Helmi",
  "/contact": "Contact — Hariz Helmi",
  "/skills": "Skills & Experience — Hariz Helmi",
};

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || titles["/"];
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <RouteEffects />
      <div className="app">
        <Navigation />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
