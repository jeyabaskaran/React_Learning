import React, { PureComponent, Component } from "react";

class RegularComponent extends PureComponent {

    render() {
        console.log('Regular component');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}
export default RegularComponent;