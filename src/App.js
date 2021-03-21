import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//Import Components
import { Navbar, User, SearchUser, Alert } from "./Components/index";

function App() {
  //state hooks
  const [fetchData, setData] = useState([]);
  const [loaidng, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlerts] = useState(null);

  //we are calling top github prfile api
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const { data } = await axios.get(
        `https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
      );
      // console.log(data);
      setData(data);
      setloading(false);
    };
    fetchData();
  }, []);
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
    <div className='App'>
      <Navbar heading={"Github Finder"} />

      <div className='container'>
        <Alert alert={alert} removeDusbin={removeDusbin} />

        <SearchUser
          searchUserFunc={searchUserFunc}
          ClearUserFunc={ClearUserFunc}
          showClearBtn={users.length > 0 ? true : false}
          setAlert={setAlert}
        />
        <User fetchData={fetchData} loading={loaidng} users={users} />
      </div>
    </div>
  );
}

export default App;
