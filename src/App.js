import "./App.css";
import Navbarr from "./components/Navbarr";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router basename="/">
      <Navbarr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>

        <Route exact path="/Blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
