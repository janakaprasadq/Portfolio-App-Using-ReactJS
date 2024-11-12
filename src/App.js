import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import MainContext from "./Components/MainContext";
import About from "./Components/Header";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand">Portfolio</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
                <Link to="/about" class="nav-link">
                  About
                </Link>
                <Link to="/projects" class="nav-link">
                  Projects
                </Link>
                <Link to="/contact" class="nav-link ">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<MainContext />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
