import React, { Component } from "react";

class EventHandler extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hello"
        }
        this.ChangeHandler = this.ChangeHandler.bind(this); //way 3
    }

    // ChangeHandler=()=> { // way 4
    //     console.log(this,'data');
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }

    ChangeHandler() { 
        console.log(this, 'data');
        this.setState({
            message: 'Good Bye!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.ChangeHandler.bind(this)}>Click</button> // way 1 */}
                <button onClick={() => this.ChangeHandler()}>Click</button> 
            </div>
        )
    }
}

export default EventHandler;