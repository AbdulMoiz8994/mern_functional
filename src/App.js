import React, { useState } from "react";
import "./App.css";
import axios from "axios";
//import the router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

  const [loaidng, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlerts] = useState(null);
  const [user, setUser] = useState({});

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
  //we are making search user func
  const searchUserFunc = async (text) => {
    const {
      data: { items },
    } = await axios.get(
      `https://api.github.com/search/users?q=${text}&?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
    );
    console.log(items);
    setUsers(items);
    setloading(false);
  };
  const getUser = async (userName) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
    );
    console.log(data);
    setUser(data);
    setloading(false);
  };
  const ClearUserFunc = () => {
    setUsers([]);
  };
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
                  <SearchUser
                    searchUserFunc={searchUserFunc}
                    ClearUserFunc={ClearUserFunc}
                    showClearBtn={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <User loading={loaidng} users={users} />
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
                  getUser={getUser}
                  users={user}
                  loading={loaidng}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
