
import React, { Component } from "react";
import { getAllStats } from './data'

class TotalTXs extends Component {
constructor(props) {
    super(props)
    this.state = {
    totalTxs: '-',
    inProgress: true
    }
}
async componentDidMount() {
    let stats = await getAllStats()
    this.setState({
    inProgress: false,
    totalTxs: stats.totalTxs
    })
}
render() {
    return (
    <div>
        <p>{this.state.totalTxs}</p>
    </div>
    );
}
}

export default TotalTXs;