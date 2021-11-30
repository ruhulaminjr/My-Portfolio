import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view/*" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
