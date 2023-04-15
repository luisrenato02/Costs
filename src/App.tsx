import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Company } from "./Components/pages/Company";
import { Contact } from "./Components/pages/Contact";
import { Footer } from "./Components/Organisms/Footer";
import { Home } from "./Components/pages/Home";
import { Navbar } from "./Components/Organisms/Navbar";
import { NewProject } from "./Components/pages/NewProject";
import { Projects } from "./Components/pages/Projects";

export const App = () => {
  return (
    <Router>
      <ul>
        <Navbar />
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/newproject" element={<NewProject />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};
