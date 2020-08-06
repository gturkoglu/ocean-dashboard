
import React, { Component } from "react";
import { getAllStats } from './data'

class TotalTXs extends Component {
constructor(props) {
    super(props)
    this.state = {
    totalUsers: '-',
    inProgress: true
    }
}
async componentDidMount() {
    let stats = await getAllStats()
    this.setState({
    inProgress: false,
    totalUsers: stats.totalUsers
    })
}
render() {
    return (
    <div>
        <p>{this.state.totalUsers}</p>
    </div>
    );
}
}

export default TotalTXs;