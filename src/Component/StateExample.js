import React, { Component } from "react";

class StateExample extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hii jeya',
            data:'final OPD'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thanks for subscribe',
            data:'Final ddd'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.changeMessage() }>Subscribe</button>
            </div>
        )

    }
}
export default StateExample;