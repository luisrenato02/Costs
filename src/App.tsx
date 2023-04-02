import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/newproject">
          <NewProject />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
