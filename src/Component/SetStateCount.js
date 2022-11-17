import React, { Component } from "react";

class SetStateCount extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {

        // this.setState({          // using set state to modify the state value, we didn't directly modify the state value
        //     count: this.state.count + 1
        // }, () => { console.log('Call back value', this.state.count) });

        this.setState((prevState) => ({  // using function within setState to get the previous state value
            count: prevState.count + 1
        }), () => { console.log('Call back', this.state.count) })
        console.log(this.state.count);

    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


    render() {
        return (

            <div>
                <h1>count - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()} >Increment</button>
            </div>
        )
    }
}

export default SetStateCount