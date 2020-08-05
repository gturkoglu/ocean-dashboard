import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Header from './components/Header'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie
} from 'recharts';

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
  const data = [
  {
    'Transaction Count': 4000 ,
  },
  {
    'Transaction Count': 90,
  },
  {
    'Transaction Count': 150,
  },
];
  const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  const data02 = [
    { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
  ];
  return (
    <div>
      <Header />
      <br/>
      <div class="columns">
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Total Apps</h2>
            <p>20</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Total TXs</h2>
            <p>50</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Total Users</h2>
            <p>569</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Unique Users</h2>
            <p>89</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Transaction History</h2>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis dataKey="Transaction Count" />
              <XAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Transaction count" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Most Used Apps</h2>
            <PieChart width={500} height={300}>
              <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );

}