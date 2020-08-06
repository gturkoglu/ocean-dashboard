
import React, { Component } from "react";
import { getAllStats } from './data'

class UniqueUsers extends Component {
constructor(props) {
    super(props)
    this.state = {
    uniqueUsers: '-',
    inProgress: true
    }
}
async componentDidMount() {
    let stats = await getAllStats()
    this.setState({
    inProgress: false,
    uniqueUsers: stats.uniqueUsers
    })
}
render() {
    return (
    <div>
        <p>{this.state.uniqueUsers}</p>
    </div>
    );
}
}

export default UniqueUsers;