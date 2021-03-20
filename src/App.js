import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//Import Components
import { Navbar, User } from "./Components/index";

function App() {
  //state hooks
  const [fetchData, setData] = useState([]);
  const [loaidng, setloading] = useState(false);
  //we are calling top github prfile api
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const { data } = await axios.get(
        `https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
      );
      console.log(data);
      setData(data);
      setloading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Navbar heading={"Github Finder"} />
      <User fetchData={fetchData} loading={loaidng} />
    </div>
  );
}

export default App;
