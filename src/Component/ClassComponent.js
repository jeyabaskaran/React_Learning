import React, { Component } from "react";

class MyComponent extends Component {

    constructor() {
        super()                 // before access or modify the data within constructor super keyword required
        this.state = {
            count: 10,
            data: 20
        }
    }

    render() {
        const { name } = this.props;                 // Destructuring
        const { count, data } = this.state;
        return <h1>Class Component !!! Hi {name} da {count} || {data} </h1>
    }
}

export default MyComponent

