import React, { Component } from "react";
import { getAllStats } from './data';
import { Doughnut } from 'react-chartjs-2';

class BestApps extends Component {
constructor(props) {
    super(props)
    this.state = {
    dataPie: {
        labels: [
            'Loading',
        ],
        datasets: [{
            data: ['1'],
            backgroundColor: [
            '#FF6384'
            ],
            hoverBackgroundColor: [
            '#FF6384'
            ]
        }]
    },
    inProgress: true
    }
}


async componentDidMount() {
    let stats = await getAllStats()
    stats.apps.sort((a, b) => (a.txs < b.txs) ? 1 : -1)

    let top1 = (stats.apps[0].txs / stats.totalTxs) * 100,
    top2 = (stats.apps[1].txs / stats.totalTxs) * 100,
    top3 = (stats.apps[2].txs / stats.totalTxs) * 100
    console.log(top1);
    console.log(stats);

    let newDataPie = {
    labels: [
        stats.apps[0].name, 
        stats.apps[1].name, 
        stats.apps[2].name
    ],
    datasets: [{
        data: [Math.round(top1), Math.round(top2), Math.round(top3)],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
    }
    console.log(newDataPie);
    console.log(Math.round(top1), Math.round(top2), Math.round(top3));

    this.setState({
    inProgress: false,
    dataPie: newDataPie,
    })
}
render() {

    return (
    <div>
        <Doughnut data={this.state.dataPie} />
    </div>
    );
}
}

export default BestApps;