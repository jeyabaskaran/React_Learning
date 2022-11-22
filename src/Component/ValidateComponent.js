import React, { Component } from "react";

class ValidateComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return this.state.isLoggedIn ? <div>Hii mj</div> : <div>Hello jeya</div>
    }

}

export default ValidateComponent;