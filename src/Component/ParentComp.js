import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComponent";
import RegularComponent from "./RegularComponent";

class ParentComp extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: 'Jeya'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jeya'
            })
        }, 2000);
    }


    render() {
        console.log('Parent component');
        return (
            <div>
                Parent Component {this.state.name}
                <MemoComp name={this.state.name} />
                {/* <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp;