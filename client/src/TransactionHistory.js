import React, { Component } from "react";
import { getAllStats } from './data';
import { Line } from 'react-chartjs-2';

class TransactionHistory extends Component {
constructor(props) {
    super(props)
    this.state = {
        labels: [
            "3:00AM",
            "6:00AM",
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM"
        ],
        datasets: [
            {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
            }
        ],
    inProgress: true
    }
}


async componentDidMount() {
    let stats = await getAllStats()
    stats.apps.sort((a, b) => (a.txs < b.txs) ? 1 : -1)

    let newTxChartData = {
        labels: [
            "3:00AM",
            "6:00AM",
            "9:00AM",
            "12:00AM",
            "3:00PM",
            "6:00PM",
            "9:00PM",
            "12:00PM"
        ],
        datasets: [
            {
            label: 'Transaction amount',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: stats.totalTxs
            }
        ]
    }
    this.setState({
    inProgress: false,
    txChartData: newTxChartData,
    })
}
render() {

    return (
    <div>
        <Line data={this.state.txChartData} />
    </div>
    );
}
}

export default TransactionHistory;