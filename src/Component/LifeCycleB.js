import React, { Component } from "react";

class LifeCycleB extends Component {


    constructor(props) {
        super(props);
        this.state={
            message:'Hii'
        }
        console.log('LifeCylce B constructor');
    }



    static getDerivedStateFromProps(props, state) {
        console.log('Licecyle B  getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Component Did Mount B');
    }


    shouldComponentUpdate(){
        console.log('shouldComponentUpdate B');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Snap 2');
        return null;
    }

    componentDidUpdate(){
        console.log('Compnent Did update B');
    }



    render() {
        console.log('render life B');
        return (<div>
            Life cyle B
        </div>)
    }


}

export default LifeCycleB;