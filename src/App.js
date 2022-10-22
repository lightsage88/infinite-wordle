import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Containers/Home";
import Navigation from "./Components/Navigation";

export const App = () => {
  return (
    <DataLayer>
      <Router>
        <Navigation />
        <Switch>
          {/* <Route path="/game">
          <Game />
        </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </DataLayer>
  );
};

export default App;
