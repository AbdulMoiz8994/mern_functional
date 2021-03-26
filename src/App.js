import React, { useState } from "react";
import "./App.css";
import axios from "axios";
//import the router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GitHubState } from "./Context/GithubContext/GitHubState";

//Import Components
import {
  Navbar,
  User,
  SearchUser,
  Alert,
  About,
  UserIndividual,
} from "./Components/index";

function App() {
  //state hooks
  // const [fetchData, setData] = useState([]);

  // const [loading, setloading] = useState(false);
  // const [users, setUsers] = useState([]);
  const [alert, setAlerts] = useState(null);
  // const [user, setUser] = useState({});
  // const [repo, setRepo] = useState([]);

  //we are calling top github prfile api
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setloading(true);
  //     const { data } = await axios.get(
  //       `https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
  //     );
  //     // console.log(data);
  //     setData(data);
  //     setloading(false);
  //   };
  //   fetchData();
  // }, []);

  //This is a function and pi call where user's repo will see

  //This is a function when user enter the username the it will do empty to input box

  //This is alert section anyuser clicke by mistake
  const setAlert = (msg, type) => {
    setAlerts({ msg, type });
    console.log(msg, type);
    setTimeout(() => {
      setAlerts(null);
    }, 3000);
  };
  const removeDusbin = () => {
    setAlerts(null);
  };

  return (
    <GitHubState>
      <Router>
        <div className='App'>
          <Navbar heading={"Github Finder"} />
          <div className='container'>
            <Alert alert={alert} removeDusbin={removeDusbin} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <div>
                    <SearchUser setAlert={setAlert} />
                    <User />
                  </div>
                )}
              />

              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/UserIndividual/:login'
                render={(props) => (
                  <UserIndividual
                    {...props}
                    //This Two below props are for repositories
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GitHubState>
  );
}

export default App;
