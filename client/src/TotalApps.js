
import React, { Component } from "react";
import { getAllStats } from './data'


class totalApps extends Component {
constructor(props) {
    super(props)
    this.state = {
    totalApps: '-',
    inProgress: true
    }
}

async componentDidMount() {
    let stats = await getAllStats()
    console.log(stats)

    this.setState({
    totalApps: stats.totalApps,
    })
}
render() {
    return (
        <div>
            <p>{this.state.totalApps}</p>
    </div>
    );
}
}

export default totalApps;
