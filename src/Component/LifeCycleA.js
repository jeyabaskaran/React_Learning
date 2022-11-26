import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {


    constructor(props) {
        super(props)
        this.state = {
            message: "Life cyle A"
        }
        console.log('constructor A');
    }

    changeMessage = () => {
        this.setState({
            message: "Welcome"
        })
    }


    static getDerivedStateFromProps(props, state) {

        console.log(state.message, 'DerivedStateProps A');
        return null
    }

    componentDidMount() {
        console.log('component mount A');
    }


    shouldComponentUpdate() {
        console.log('shouldComponentUpdate A');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps,prevState.message,'Snap 1');
        return null;
    }

    componentDidUpdate() {
        console.log('Compnent Did update A');
    }


    render() {
        console.log('render');
        return (
            <div>{this.state.message}
                <button onClick={this.changeMessage}>Click</button>
                <LifeCycleB />
            </div>

        )
    }

}

export default LifeCycleA;