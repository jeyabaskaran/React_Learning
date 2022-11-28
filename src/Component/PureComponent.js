import React, { PureComponent } from "react";

class PureComp extends PureComponent {


    shouldComponentUpdate(prevProps, nextProps, nextState) {
        console.log(prevProps, 'prevb', nextProps, 'nextprop', nextState, 'nextState');
        return (this.props.name) ? true : null;
    }

    render() {
        console.log('Pure component');
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }

}

export default PureComp;