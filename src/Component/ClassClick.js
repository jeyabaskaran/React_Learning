import React, { Component } from "react";


class ClassClick extends Component {
    ChangeHandler() {
        console.log('Button Class Click');
    }
    render() {
        return (
            <div>
                <button onClick={this.ChangeHandler}>Click Class button</button>
            </div>)
    }
}


export default ClassClick