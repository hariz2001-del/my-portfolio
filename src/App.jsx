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
import Footer from "./components/Footer";
import "./App.css";

const titles = {
  "/": "Hariz Helmi — Product, Systems & Cloud",
  "/projects": "Projects — Hariz Helmi",
  "/about": "About — Hariz Helmi",
  "/contact": "Contact — Hariz Helmi",
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
