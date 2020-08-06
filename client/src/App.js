import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import axios from 'axios';
import TotalApps from './TotalApps';
import TotalTXs from './TotalTXs';
import TotalUsers from './TotalUsers';
import UniqueUsers from './UniqueUsers';
import BestApps from './BestApps';
import TransactionHistory from './TransactionHistory';


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  const [data, setData] = useState([]);

  const columns = [
    { property: "appid", header: "App Id" },
    { property: "homepage", header: "Homepage" },
    { property: "name", header: "Name" },
  ];

  useEffect(() => {
    const loadData = async () => {
      const response = await axios(
        "http://127.0.0.1:5000/"
      );
      setData(response.data);
    };
    loadData();
  }, []);
  return (
    <div>
      <Header />
      <br/>
      <div class="columns">
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Total Apps</h2>
            <TotalApps />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Total TXs</h2>
            <TotalTXs />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Total Users</h2>
           <TotalUsers />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Unique Users</h2>
            <UniqueUsers />
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Transaction History</h2>
            <TransactionHistory />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Most Used Apps</h2>
            <BestApps />
          </div>
        </div>
      </div>
      <div class="card">
      <table class="table" style={{width: "100%"}}>
          <tr>
            {columns.map(col => (
              <th>{col.header}</th>
            ))}
          </tr>
          {data.map(datumn => {
            return (
              <tr>
                {columns.map(col => {
                  return <td>{datumn[col.property]}</td>;
                })}
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );

}