import React, { Component } from "react";
import ChildCompnent from "./ChildComponent";

class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parent: 'Parent'
        }
        this.childHandler = this.childHandler.bind(this);
    }

    childHandler(Child) {
        alert(`Hello ${this.state.parent} from ${Child}` )
    }

    render() {
        return (
            <div>
                <ChildCompnent childController={this.childHandler}/>
            </div>
        )
    }
}

export default ParentComponent;