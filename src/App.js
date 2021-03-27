import React from "react";
import "./App.css";
//import the router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GitHubState } from "./Context/GithubContext/GitHubState";
import { AlertState } from "./Context/Alert/AlertState";

//Import Components
import {
  Navbar,
  Alert,
  About,
  UserIndividual,
  Home,
  PageNotFoun,
} from "./Components/index";

function App() {
  // const [alert, setAlerts] = useState(null);

  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar heading={"Github Finder"} />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/UserIndividual/:login'
                  component={UserIndividual}
                />
                <Route component={PageNotFoun} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
}

export default App;
